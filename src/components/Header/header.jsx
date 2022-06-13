import React, { useState, useEffect, useRef } from 'react'

import './header.css'

import { Link, useMatch } from 'react-router-dom'
import { $ } from '@utils/dom'

import useUser from '@hooks/useUser'

import HomeIcon from '@components/Icons/homeIcon'
import PostIcon from '@components/Icons/postIcon'
import ProfileIcon from '@components/Icons/profileIcon'
import LogOutIcon from '@components/Icons/logOutIcon'
import EllipsisIcon from '@components/Icons/ellipsisIcon'
import AudioWaveIcon from '@components/Icons/audioWaceIcon'

const LogOut = React.lazy(() => import('@components/Modals/LogOut/logout'))
const ModalPost = React.lazy(() => import('@components/Modals/NewPost/newpost'))
const ChangePassw = React.lazy(() => import('@components/Modals/ChangePassw/changePassw'))

const ItemNav = ({ to, label, item }) => {
  const match = useMatch(to)

  return (
    <Link className={match && 'active'} to={to}>
      {item} <span className='navbar-text'>{label}</span>
    </Link>
  )
}

const ToggleMenu = ({ onClose, onClickLog, onClickPassw }) => {
  const divRef = useRef()
  const coverWindow = $('.cover-window')

  useEffect(() => {
    setTimeout(() => {
      divRef.current.classList.add('active')
    }, 50)
  }, [])

  coverWindow.classList.add('active')

  coverWindow.addEventListener('click', () => {
    onClose()
    coverWindow.classList.remove('active')
  })

  const handleClickPassw = () => {
    onClickPassw()
    onClose()
    coverWindow.classList.remove('active')
  }

  const handleClickLog = () => {
    onClickLog()
    onClose()
    coverWindow.classList.remove('active')
  }

  return (
    <div ref={divRef} className='user-menu'>
      <div className='user-menu-options' onClick={handleClickPassw}>
        <span>Cambiar contraseña</span>
      </div>
      <div className='user-menu-options' onClick={handleClickLog}>
        <span>Cerrar Sesión </span><LogOutIcon />
      </div>

    </div>
  )
}

export default function Header ({ updateCurrentPage }) {
  const [showModalLogOut, setShowModalLogOut] = useState(false)
  const [showModalMenu, setShowModalMenu] = useState(false)
  const [showModalPost, setShowModalPost] = useState(false)
  const [showModalChangePassw, setShowModalChangePassw] = useState(false)
  const { user } = useUser()
  const urlImg = `https://peaceful-brook-00691.herokuapp.com/user/img/${user.profile_img}`

  const handleClickMenu = () => {
    setShowModalMenu(true)
  }

  const handleCloseMenu = () => {
    setShowModalMenu(false)
  }

  const handleClickLogOut = () => {
    setShowModalLogOut(true)
    setShowModalMenu(false)
  }

  const handleCloseLogOut = () => {
    setShowModalLogOut(false)
  }

  const handleClickPost = () => {
    setShowModalPost(true)
  }

  const handleClosePost = () => {
    setShowModalPost(false)
  }

  const handleClickChangePassw = () => {
    setShowModalChangePassw(true)
    setShowModalMenu(false)
  }

  const handleCloseChangePassw = () => {
    setShowModalChangePassw(false)
  }

  return (
    <>
      <aside className='menu'>

        <div className='logo-app'>
          <Link to='/home'>
            <span className='navbar-text'>Feel It</span><AudioWaveIcon />
          </Link>
        </div>

        <nav className='nav-bar'>
          <ItemNav to='/home' label='Home' item={<HomeIcon />} />
          <ItemNav to={'profile/' + user.nick} label='Perfil' item={<ProfileIcon />} />
          <button className='btn' type='button' onClick={handleClickPost}><PostIcon /> <p className='navbar-text'>New Post</p></button>
          {
          showModalMenu && (
            <ToggleMenu onClose={() => handleCloseMenu()} onClickPassw={handleClickChangePassw} onClickLog={() => handleClickLogOut()} />
          )
        }
        </nav>
        <div className='user-info' onClick={handleClickMenu}>
          <div className='user-image'>
            <img src={urlImg} alt='user image' />
          </div>
          <div className='navbar-text'>
            <div>
              <div className='user-tags'>
                <span className='tag-name'><b>{user.name}</b></span>
                <span className='tag-nick'>@{user.nick}</span>
              </div>
              <EllipsisIcon />
            </div>
          </div>
        </div>
      </aside>
      {
        showModalLogOut && (
          <React.Suspense fallback={null}>
            <LogOut onClose={handleCloseLogOut} />
          </React.Suspense>)
      }
      {
        showModalPost && (
          <React.Suspense fallback={null}>
            <ModalPost onClose={handleClosePost} updatePage={updateCurrentPage} />
          </React.Suspense>)
      }
      {
        showModalChangePassw && (
          <React.Suspense fallback={null}>
            <ChangePassw onClose={handleCloseChangePassw} />
          </React.Suspense>)
      }
    </>
  )
}
