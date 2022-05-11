import useUser from '@hooks/useUser'
import { Link } from 'react-router-dom'

export default function LogOut () {
  const { logout } = useUser()

  const handleClick = (e) => {
    logout()
  }

  return (
    <div>
      <p>Estas Seguro de que deseas cerrar sesión?</p>
      <Link to='/login' onClick={handleClick}>Cerrar Sesión</Link>
      <Link to='..'>Cancelar</Link>
    </div>
  )
}
