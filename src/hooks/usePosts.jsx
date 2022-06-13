import { useCallback, useState } from 'react'
import { create, obtainAll, remove } from '@services/posts.services'
import { compartida, removecompartida } from '@services/song.services'

export default function usePosts () {
  const [posts, setPosts] = useState()
  const [isLoading, setIsLoanding] = useState(false)

  const obtainPosts = useCallback(() => {
    setIsLoanding(true)
    obtainAll()
      .then(res => {
        setPosts(res)
        setIsLoanding(false)
      })
  }, [])

  const newPost = useCallback(({ user, text, song, closeModal, updatePage }) => {
    create({ user, text, song })
      .then(() => {
        compartida({ id: song })
        closeModal()
        updatePage(true)
      })
  }, [])

  const removePost = useCallback(({ id, song, updatePosts }) => {
    remove({ id })
      .then(() => {
        removecompartida({ id: song })
        updatePosts(true)
      })
      .catch(err => console.log(err))
  }, [])

  return { posts, newPost, isLoading, obtainPosts, removePost }
}
