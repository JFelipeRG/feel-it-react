import './App.css'

import { Outlet, useNavigate } from 'react-router-dom'
import useUser from '@hooks/useUser'

import Header from '@components/Header/header'
import { useEffect } from 'react'

function App () {
  const { isLogged } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    navigate(isLogged ? 'home' : 'login')
  }, [isLogged, navigate])

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
