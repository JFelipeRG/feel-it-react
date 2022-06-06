import '@styles/breakpoint-1250px.css'
import './App.css'

import { Outlet, useNavigate } from 'react-router-dom'

import useUser from '@hooks/useUser'
import React, { useEffect } from 'react'

const Header = React.lazy(() => import('@components/Header/header'))
const Hotest = React.lazy(() => import('@components/Explore/PopularSongs/popularSongs'))
const RecentSongs = React.lazy(() => import('@components/Explore/RecentSongs/recentSongs'))

function App () {
  const navigate = useNavigate()
  const { isLogged } = useUser()

  useEffect(() => {
    navigate(isLogged ? '/home' : '/welcome')
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
              <div className='body-main-content'>
                <Outlet />
              </div>
              <div className='explore-aside'>
                <React.Suspense fallback={null}>
                  <Hotest />
                  <RecentSongs />
                </React.Suspense>
              </div>
            </div>
          </div>
        </>}
    </>
  )
}

export default App
