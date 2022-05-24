import { useCallback, useEffect, useState } from 'react'
import { create, obtainAll } from '@services/posts.services'
import { compartida } from '@services/song.services'

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
        console.log(song)
        compartida({ id: song })
        closeModal()
      })
  }, [])

  return { posts, newPost, isLoading }
}
