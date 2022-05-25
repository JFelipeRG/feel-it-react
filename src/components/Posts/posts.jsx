import EllipsisIcon from '@components/Icons/ellipsisIcon'
import TrashIcon from '@components/Icons/trashIcon'
import Song from '@components/Song/song'
import useUser from '@hooks/useUser'
import { getDiffTime } from '@utils/dates'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './posts.css'

import { $ } from '@utils/dom'
import RemoveModal from '@components/Modals/RemovePost/removePost'

const ToggleBorrar = ({ onClose, onClick }) => {
  const divRef = useRef()
  const coverWindow = $('.cover-window')

  useEffect(() => {
    setTimeout(() => {
      divRef.current.classList.add('visible')
    }, 0.5)
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
  const urlImg = props.usuario.profile_img ? `http://localhost:3002/api/user/img/${props.usuario.profile_img}` : '/src/assets/img/default-user.png'

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
            <p><b>{props.usuario.name}</b> @{props.usuario.nick} · {diffTime}</p>
          </Link>
          <p className='post-text'>{props.contenido}</p>
        </div>
      </div>
      <div className='post-song'>
        <Song {...props.cancion} />
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
        showModal && <RemoveModal onClose={handleCloseModal} idPost={props.id} idSong={props.cancion.id} />
      }
    </div>
  )
}
