import './App.css'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import useUser from '@hooks/useUser'
import React, { useEffect } from 'react'

const Header = React.lazy(() => import('@components/Header/header'))
const Hotest = React.lazy(() => import('@components/Explore/PopularSongs/popularSongs'))
const RecentSongs = React.lazy(() => import('@components/Explore/RecentSongs/recentSongs'))

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
        <>
          <div className='cover-window' />
          <div className='main-content'>
            <div className='app-header'>
              <React.Suspense fallback={null}><Header /></React.Suspense>
            </div>
            <div className='app-body'>
              <Outlet />

            </div>
            <div className='explore-aside'>
              <React.Suspense fallback={null}>
                <Hotest />
                <RecentSongs />
              </React.Suspense>
            </div>
          </div>
        </>}
    </>
  )
}

export default App
