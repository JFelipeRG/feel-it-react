import './App.css'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import Header from '@components/Header/header'

import useUser from '@hooks/useUser'
import { useEffect } from 'react'
console.log('hola')
function App () {
  const location = useLocation().pathname
  const navigate = useNavigate()
  const { isLogged } = useUser()

  useEffect(() => {
    if (location === '/') navigate(isLogged ? '/home' : '/login')
  }, [isLogged])

  return (
    <div className='main-content'>
      <div className='app-header'>
        <Header />
      </div>
      <div className='app-body'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
