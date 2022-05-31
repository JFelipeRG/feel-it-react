import '../index.css'

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
      <div className='modal-container'>
        <div className='confirm-action'>
          <p>¿Estas seguro de que deseas cerrar sesión?</p>
          <div className='links-options'>
            <Link className='links btn primary' to='/welcome' onClick={handleClick}><span>Cerrar Sesión</span></Link>
            <button className='links btn secondary' onClick={onClose}><span>Cancelar</span></button>
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
