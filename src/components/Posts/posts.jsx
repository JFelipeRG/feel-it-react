import './posts.css'

import EllipsisIcon from '@components/Icons/ellipsisIcon'
import TrashIcon from '@components/Icons/trashIcon'
import Song from '@components/Song/song'
import useUser from '@hooks/useUser'
import { getDiffTime } from '@utils/dates'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import YT from '@assets/SVG/youtube.svg'
import Spotify from '@assets/SVG/spotify.svg'

import { $ } from '@utils/dom'

const RemoveModal = React.lazy(() => import('@components/Modals/RemovePost/removePost'))

const ToggleBorrar = ({ onClose, onClick }) => {
  const divRef = useRef()
  const coverWindow = $('.cover-window')

  useEffect(() => {
    setTimeout(() => {
      divRef.current.classList.add('visible')
    }, 50)
  }, [])

  coverWindow.classList.add('active')

  coverWindow.addEventListener('click', () => {
    onClose()
    coverWindow.classList.remove('active')
  })

  const showModal = () => {
    onClick()
    coverWindow.classList.remove('active')
  }

  return (
    <div onClick={showModal} ref={divRef} className='toggle-menu'>
      <TrashIcon /> Borrar
    </div>
  )
}

export default function Post (props) {
  const [showModal, setShowModal] = useState(false)

  const { user } = useUser()
  const urlImg = `https://peaceful-brook-00691.herokuapp.com/user/img/${props.usuario.profile_img}`

  const diffTime = getDiffTime(props.fecha_post)

  const [showMenu, setShowMenu] = useState(false)

  const handleClose = () => setShowMenu(false)

  const handleShowModal = () => setShowModal(true)

  const handleCloseModal = () => setShowModal(false)

  return (
    <div className='post'>
      <div className='post-info'>
        <Link to={'/profile/' + props.usuario.nick}>
          <img src={urlImg} alt='profile image' />
        </Link>
        <div>
          <Link to={'/profile/' + props.usuario.nick}>
            <p><b>{props.usuario.name}</b></p>
            <p>@{props.usuario.nick}</p>
          </Link>
          <p>{diffTime}</p>
        </div>
      </div>
      <div className='post-song'>
        <p className='post-text'>{props.contenido}</p>
        <div className='post-song-info'>
          <Song {...props.cancion} />
          <a href={props.cancion.link_yt} target='_blank' rel='noreferrer'><img src={YT} alt='' width={40} /></a>
          <a href={props.cancion.link_spoty} target='_blank' rel='noreferrer'><img src={Spotify} alt='' width={40} /></a>
        </div>
      </div>
      {
        user.id === props.usuario.id && (
          <div className='post-user-menu' onClick={() => setShowMenu(!showMenu)}>
            <EllipsisIcon />
            {
              showMenu && <ToggleBorrar onClose={handleClose} onClick={handleShowModal} />
            }
          </div>
        )
      }
      {
        showModal && (
          <React.Suspense fallback={null}>
            <RemoveModal onClose={handleCloseModal} idPost={props.id} idSong={props.cancion.id} />
          </React.Suspense>
        )
      }
    </div>
  )
}
