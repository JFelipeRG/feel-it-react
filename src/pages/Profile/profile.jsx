import './profile.css'

import useProfile from '@hooks/useProfile'
import Post from '@components/Posts/posts'

export default function Profile () {
  const { user, isLoading } = useProfile({ nick: 'Felipe' })

  if (isLoading) {
    return (
      <h1>Cargando...</h1>
    )
  }

  if (user) {
    return (
      <div className='body-profile'>
        <div className='profile-user'>
          <img src='/src/assets/img/default-user.png' alt='profile image' />
          <p><b>{user.name}</b></p>
          <p>@{user.nick}</p>
          <p>Creada el: {user.fecha_creacion}</p>
        </div>
        <div className='profile-posts'>
          {user.posts.map((post) => {
            return <Post key={post.id} {...post} />
          })}
        </div>
      </div>
    )
  }
}
