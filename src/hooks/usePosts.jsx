import { useCallback, useEffect, useState } from 'react'
import { create, obtainAll, remove } from '@services/posts.services'
import { compartida, removecompartida } from '@services/song.services'

export default function usePosts () {
  const [posts, setPosts] = useState()
  const [isLoading, setIsLoanding] = useState(false)

  useEffect(() => {
    setIsLoanding(true)
    obtainAll()
      .then(res => {
        setPosts(res)
        setIsLoanding(false)
      })
  }, [setPosts])

  const newPost = useCallback(({ user, text, song, closeModal }) => {
    create({ user, text, song })
      .then(() => {
        compartida({ id: song })
        closeModal()
      })
  }, [])

  const removePost = useCallback(({ id, song }) => {
    console.log(id)
    remove({ id })
      .then(() => {
        removecompartida({ id: song })
      })
      .catch(err => console.log(err))
  }, [])

  return { posts, newPost, isLoading, removePost }
}
