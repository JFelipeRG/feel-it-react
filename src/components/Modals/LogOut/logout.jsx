import '../index.css'
import './logout.css'

import ReactDOM from 'react-dom'

import useUser from '@hooks/useUser'
import { Link } from 'react-router-dom'

function LogOut ({ onClose }) {
  const { logout } = useUser()

  const handleClick = () => {
    logout()
  }

  return (
    <div className='blur-back center'>
      <div className='option-container'>
        <div>
          <p>¿Estas seguro de que deseas cerrar sesión?</p>
          <div className='links-options'>
            <Link className='links' to='/welcome' onClick={handleClick}>Cerrar Sesión</Link>
            <button className='links' onClick={onClose}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LogOutPortal ({ onClose }) {
  return ReactDOM.createPortal(
    <LogOut onClose={onClose} />,
    document.getElementById('modals')
  )
}
