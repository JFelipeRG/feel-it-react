import './App.css'

import { Outlet } from 'react-router-dom'
import useUser from '@hooks/useUser'
import useNav from '@hooks/useNav'

import Header from '@components/Header/header'

function App () {
  const { isLogged } = useUser()

  useNav({ path: isLogged ? 'home' : 'logIn' })

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
