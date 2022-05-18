import './header.css'

import LogOut from '@components/LogOut/logout'
import { useState } from 'react'
import { Link, useMatch } from 'react-router-dom'

import useUser from '@hooks/useUser'

const ItemNav = ({ to, label }) => {
  const match = useMatch(to)

  return <Link className={match && 'active'} to={to}>{label}</Link>
}

export default function Header () {
  const [showModal, setShowModal] = useState(false)
  const { user } = useUser()

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <aside className='menu'>
        <div className='logo-app'>
          <img src='/src/assets/logo.svg' alt='' />
        </div>
        <nav className='nav-bar'>
          <ItemNav to='/home' label='Home' />
          <ItemNav to={'profile/' + user.nick} label='Profile' />
          <ItemNav to='/post' label='Post' />
        </nav>
        <div className='user-info'>
          <Link to='#' onClick={handleClick}>Log Out</Link>
          <h1>profile</h1>
        </div>
      </aside>
      {
        showModal && <LogOut onClose={handleClose} />
      }
    </>
  )
}
