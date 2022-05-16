import LogOut from '@components/LogOut/logout'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header () {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <aside>
        <nav>
          <Link to='/home'>Home</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/post'>Post</Link>
          <Link to='#' onClick={handleClick}>Log Out</Link>
        </nav>
      </aside>
      {
        showModal && <LogOut onClose={handleClose} />
      }
    </>
  )
}
