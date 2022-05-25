import './header.css'

import { useState } from 'react'
import { Link, useMatch } from 'react-router-dom'

import useUser from '@hooks/useUser'

import LogOut from '@components/Modals/LogOut/logout'
import ModalPost from '@components/Modals/NewPost/newpost'

import HomeIcon from '@components/Icons/homeIcon'
import PostIcon from '@components/Icons/postIcon'
import ProfileIcon from '@components/Icons/profileIcon'
import LogOutIcon from '@components/Icons/logOutIcon'

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
  const urlImg = user.profile_img ? `http://localhost:3002/api/user/img/${user.profile_img}` : '/src/assets/img/default-user.png'

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
        <div className='logo-app'>
          <img src='/src/assets/SVG/logo.svg' alt='' />
        </div>
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
        showModalLogOut && <LogOut onClose={handleCloseLogOut} />
      }
      {
        showModalPost && <ModalPost onClose={handleClosePost} />
      }
    </>
  )
}
