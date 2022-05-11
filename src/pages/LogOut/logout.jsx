import { Link } from 'react-router-dom'

export default function LogOut () {
  return (
    <div>
      <p>Estas Seguro de que deseas cerrar sesión?</p>
      <Link to='/login'>Cerrar Sesión</Link>
      <Link to='/home'>Cancelar</Link>
    </div>
  )
}
