import '@styles/logs.styles.css'

import useUser from '@hooks/useUser'
import { Link } from 'react-router-dom'

export default function LogOut () {
  const { logout } = useUser()

  const handleClick = (e) => {
    logout()
  }

  return (
    <div className='form-container'>
      <div className='option-container'>
        <p>Estas Seguro de que deseas cerrar sesión?</p>
        <div className='links-options'>
          <Link className='links' to='/login' onClick={handleClick}>Cerrar Sesión</Link>
          <Link className='links' to='/home'>Cancelar</Link>
        </div>
      </div>
    </div>
  )
}
