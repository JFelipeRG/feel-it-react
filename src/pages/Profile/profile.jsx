import './profile.css'

import useProfile from '@hooks/useProfile'
import Post from '@components/Posts/posts'
import { useLocation } from 'react-router-dom'

export default function Profile () {
  const name = (useLocation().pathname).split('/')[2]
  const { user, isLoading } = useProfile({ nick: name })

  if (isLoading) {
    return (
      <h1>Cargando...</h1>
    )
  }

  if (user) {
    const fecha = new Date(user.fecha_creacion)
    const urlImg = user.profile_img ? `http://localhost:3002/api/user/img/${user.profile_img}` : '/src/assets/img/default-user.png'
    return (
      <div className='body-profile'>
        <div className='profile-user'>
          <img src={urlImg} alt='profile image' />
          <p><b>{user.name}</b></p>
          <p>@{user.nick}</p>
          <p>Creada el: {fecha.toLocaleDateString()}</p>
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
