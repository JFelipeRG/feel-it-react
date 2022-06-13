import './home.css'

import usePosts from '@hooks/usePosts'
import Post from '@components/Posts/posts'
import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Home () {
  const { posts, isLoading, obtainPosts } = usePosts()
  const [update, setUpdate] = useOutletContext()

  useEffect(() => {
    obtainPosts()
    setUpdate(false)
  }, [obtainPosts, update])

  if (isLoading) {
    return (
      <h1>Cargando...</h1>
    )
  }

  if (posts) {
    return (
      <div className='home-posts'>
        {posts.map((post) => {
          return <Post key={post.id} {...post} updatePosts={setUpdate} />
        })}
      </div>
    )
  }
}
