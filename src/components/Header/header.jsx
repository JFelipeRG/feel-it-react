import React, { useState } from 'react'

import './header.css'

import { Link, useMatch } from 'react-router-dom'

import useUser from '@hooks/useUser'

import HomeIcon from '@components/Icons/homeIcon'
import PostIcon from '@components/Icons/postIcon'
import ProfileIcon from '@components/Icons/profileIcon'
import LogOutIcon from '@components/Icons/logOutIcon'

const LogOut = React.lazy(() => import('@components/Modals/LogOut/logout'))
const ModalPost = React.lazy(() => import('@components/Modals/NewPost/newpost'))

const ItemNav = ({ to, label, item }) => {
  const match = useMatch(to)

  return (
    <Link className={match && 'active'} to={to}>
      <div>{item} {label}</div>
    </Link>
  )
}

export default function Header () {
  const [showModalLogOut, setShowModalLogOut] = useState(false)
  const [showModalPost, setShowModalPost] = useState(false)
  const { user } = useUser()
  const urlImg = `http://localhost:3002/api/user/img/${user.profile_img}`

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
        </nav>
        <div className='user-info' onClick={handleClickLogOut}>
          <div className='user-image'>
            <img src={urlImg} alt='user image' />
          </div>
          <div className='user-tags'>
            <span className='tag-name'><b>{user.name}</b></span>
            <span className='tag-nick'>@{user.nick}</span>
          </div>
          <LogOutIcon />
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
    </>
  )
}
