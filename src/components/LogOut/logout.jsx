import '@styles/logs.styles.css'
import './logout.css'

import useUser from '@hooks/useUser'
import { Link } from 'react-router-dom'

export default function LogOut ({ onClose }) {
  const { logout } = useUser()

  const handleClick = (e) => {
    logout()
  }

  return (
    <div className='modal'>
      <div className='option-container'>
        <div>
          <p>¿Estas seguro de que deseas cerrar sesión?</p>
          <div className='links-options'>
            <Link className='links' to='/login' onClick={handleClick}>Cerrar Sesión</Link>
            <Link className='links' to='#' onClick={onClose}>Cancelar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
