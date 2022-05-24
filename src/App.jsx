import './App.css'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import Header from '@components/Header/header'

import useUser from '@hooks/useUser'
import { useEffect } from 'react'
import Hotest from '@components/Explore/HotestSongs/hotestSongs'
import RecentSongs from '@components/Explore/RecentSongs/recentSongs'

function App () {
  const location = useLocation().pathname
  const navigate = useNavigate()
  const { isLogged } = useUser()

  useEffect(() => {
    if (location === '/') navigate(isLogged ? '/home' : '/login')
  }, [isLogged])

  return (
    <>
      {isLogged &&
        <div className='main-content'>
          <div className='app-header'>
            <Header />
          </div>
          <div className='app-body'>
            <Outlet />

          </div>
          <div className='explore-aside'>
            <Hotest />
            <RecentSongs />
          </div>
        </div>}
    </>
  )
}

export default App
