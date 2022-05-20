import './header.css'

import { useState } from 'react'
import { Link, useMatch } from 'react-router-dom'

import { AiFillHome } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { HiPencilAlt } from 'react-icons/hi'
import { CgLogOut } from 'react-icons/cg'

import useUser from '@hooks/useUser'

import LogOut from '@components/ModalLogOut/logout'
import ModalPost from '@components/ModalNewPost/newpost'

const ItemNav = ({ to, label, Item }) => {
  const match = useMatch(to)

  return (
    <Link className={match && 'active'} to={to}>
      <div>{Item} {label}</div>
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
          <ItemNav to='/home' label='Home' Item={<AiFillHome />} />
          <ItemNav to={'profile/' + user.nick} label='Profile' Item={<FaUserAlt />} />
          <button className='btn' type='button' onClick={handleClickPost}><HiPencilAlt />New Post</button>
        </nav>
        <div className='user-info'>
          <div className='user-image'>
            <img src={urlImg} alt='user image' />
          </div>
          <div className='user-tags'>
            <span className='tag-name'><b>{user.name}</b></span>
            <span className='tag-nick'>@{user.nick}</span>
          </div>
          <Link to='#' onClick={handleClickLogOut}><CgLogOut /></Link>
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
