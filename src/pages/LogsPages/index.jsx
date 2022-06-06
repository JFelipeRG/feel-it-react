import '@styles/forms.styles.css'

import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import useUser from '@hooks/useUser'

export default function Logs () {
  const pathname = useLocation().pathname
  const navigate = useNavigate()
  const { isLogged } = useUser()

  useEffect(() => {
    navigate(isLogged ? '/home' : pathname)
  }, [isLogged])

  return (
    <div className='form-container'>
      {isLogged || (<Outlet />)}
    </div>
  )
}
