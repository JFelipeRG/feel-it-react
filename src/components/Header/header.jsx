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

const LogOut = React.lazy(() => import('@components/Modals/LogOut/logout'))
const ModalPost = React.lazy(() => import('@components/Modals/NewPost/newpost'))
const ChangePassw = React.lazy(() => import('@components/Modals/ChangePassw/changePassw'))

const ItemNav = ({ to, label, item }) => {
  const match = useMatch(to)

  return (
    <Link className={match && 'active'} to={to}>
      <div>{item} {label}</div>
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

  return (
    <div ref={divRef} className='user-menu'>
      <div className='user-menu-options' onClick={onClickPassw}>
        <span>Cambiar contraseña</span>
      </div>
      <div className='user-menu-options' onClick={onClickLog}>
        <span>Cerrar Sesión </span><LogOutIcon />
      </div>

    </div>
  )
}

export default function Header () {
  const [showModalLogOut, setShowModalLogOut] = useState(false)
  const [showModalMenu, setShowModalMenu] = useState(false)
  const [showModalPost, setShowModalPost] = useState(false)
  const [showModalChangePassw, setShowModalChangePassw] = useState(false)
  const { user } = useUser()
  const urlImg = `http://localhost:3002/api/user/img/${user.profile_img}`

  const handleClickMenu = () => {
    setShowModalMenu(true)
  }

  const handleCloseMenu = () => {
    setShowModalMenu(false)
  }

  const handleClickLogOut = () => {
    setShowModalLogOut(true)
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
  }

  const handleCloseChangePassw = () => {
    setShowModalChangePassw(false)
  }

  return (
    <>
      <aside className='menu'>
        <Link to='/home'>
          <div className='logo-app'>
            <img src='/src/assets/SVG/logo.svg' alt='' />
          </div>
        </Link>
        <nav className='nav-bar'>
          <ItemNav to='/home' label='Home' item={<HomeIcon />} />
          <ItemNav to={'profile/' + user.nick} label='Profile' item={<ProfileIcon />} />
          <button className='btn' type='button' onClick={handleClickPost}><PostIcon /> New Post</button>
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
          <div className='user-tags'>
            <span className='tag-name'><b>{user.name}</b></span>
            <span className='tag-nick'>@{user.nick}</span>
          </div>
          <EllipsisIcon />
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
            <ModalPost onClose={handleClosePost} />
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
