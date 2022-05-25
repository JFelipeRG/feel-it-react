import './profile.css'

import useProfile from '@hooks/useProfile'
import Post from '@components/Posts/posts'
import { useLocation } from 'react-router-dom'
import useUser from '@hooks/useUser'
import { useState } from 'react'

export default function Profile () {
  const name = (useLocation().pathname).split('/')[2]
  const { user, isLoading } = useProfile({ nick: name })
  const { user: actualUser } = useUser()
  const [showModal, setShowModal] = useState(false)

  if (isLoading) {
    return (
      <h1>Cargando...</h1>
    )
  }

  if (user) {
    const fecha = new Date(user.fecha_creacion)
    const urlImg = `http://localhost:3002/api/user/img/${user.profile_img}`
    return (
      <div className='body-profile'>
        <div className='profile-user'>
          <img src={urlImg} alt='profile image' />
          <p><b>{user.name}</b></p>
          <p>@{user.nick}</p>
          <p>Creada el: {fecha.toLocaleDateString()}</p>
          {
            actualUser.id === user.id && (
              <button onClick={() => setShowModal(!showModal)}>Editar Perfil</button>
            )
          }
        </div>
        <div className='profile-posts'>
          {user.posts.map((post) => {
            return <Post key={post.id} {...post} />
          })}
        </div>
        {
          showModal && (
            <h1>Quieres mostar el modal</h1>
          )
        }
      </div>
    )
  }
}
