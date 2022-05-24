import './home.css'

import usePosts from '@hooks/usePosts'
import Post from '@components/Posts/posts'

export default function Home () {
  const { posts, isLoading } = usePosts()

  if (isLoading) {
    return (
      <h1>Cargando...</h1>
    )
  }

  if (posts) {
    return (
      <div className='home-posts'>
        {posts.map((post) => {
          return <Post key={post.id} {...post} />
        })}
      </div>
    )
  }
}
