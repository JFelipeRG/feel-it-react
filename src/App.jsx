import './App.css'

import { Outlet } from 'react-router-dom'

import Header from '@components/Header/header'
import useNav from '@hooks/useNav'

function App () {
  useNav()

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
