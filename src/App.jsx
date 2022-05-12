import './App.css'

import { Outlet, useNavigate } from 'react-router-dom'

import Header from '@components/Header/header'

import useUser from '@hooks/useUser'
import { useEffect } from 'react'

function App () {
  const navigate = useNavigate()
  const { isLogged } = useUser()

  useEffect(() => {
    navigate(isLogged ? '/home' : '/login')
  }, [isLogged])

  return (
    <>
      <div className='app-header'>
        <Header />
      </div>
      <div className='app-body'>
        <Outlet />
      </div>
    </>
  )
}

export default App
