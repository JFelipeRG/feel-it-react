import './profile.css'

import { useOutletContext, useLocation } from 'react-router-dom'

import useProfile from '@hooks/useProfile'
import Post from '@components/Posts/posts'

import useUser from '@hooks/useUser'
import React, { useEffect, useState } from 'react'
import EditPencilIcon from '@components/Icons/editPencilIcon'

const EditProfilePortal = React.lazy(() => import('@components/Modals/EditProfile/editProfile'))

export default function Profile () {
  const name = (useLocation().pathname).split('/')[2]
  const { user: actualUser } = useUser()
  const { user, isLoading, updateUser } = useProfile({ nick: name })
  const [update, setUpdate] = useOutletContext()

  useEffect(() => {
    if (actualUser && user && actualUser.nick !== user.nick) {
      updateUser({ nick: actualUser.nick })
    } else {
      updateUser({ nick: name })
    }
    setUpdate(false)
  }, [name, actualUser, update])

  const [showModal, setShowModal] = useState(false)

  if (isLoading) {
    return (
      <h1>Cargando...</h1>
    )
  }

  if (user) {
    const fecha = new Date(user.fecha_creacion)
    const urlImg = `https://peaceful-brook-00691.herokuapp.com/user/img/${user.profile_img}`
    return (
      <div className='body-profile'>
        <div className='profile-user'>
          <img src={urlImg} alt='profile image' />
          <p><b>{user.name}</b></p>
          <p>@{user.nick}</p>
          <p>Creada el: {fecha.toLocaleDateString()}</p>
          {
            actualUser.id === user.id && (
              <span title='Editar Perfil' className='edit-icon' onClick={() => setShowModal(true)}><EditPencilIcon /></span>
            )
          }
        </div>
        <div className='profile-posts'>
          {user.posts.map((post) => {
            return <Post key={post.id} {...post} updatePosts={setUpdate} />
          })}
        </div>
        {
          showModal && (
            <React.Suspense fallback={null}>
              <EditProfilePortal onClose={() => setShowModal(false)} />
            </React.Suspense>
          )
        }
      </div>
    )
  }
}
