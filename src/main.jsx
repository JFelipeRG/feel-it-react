import './index.css'

import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { UserContextProvider } from '@context/UserContext'

import App from './App'

const Welcome = lazy(() => import('@pages/Welcome/welcome'))

const Home = lazy(() => import('@pages/Home/home'))
const Profile = lazy(() => import('@pages/Profile/profile'))

const Logs = lazy(() => import('@pages/LogsPages/index'))
const LogIn = lazy(() => import('@pages/LogsPages/Login/login'))
const SingUp = lazy(() => import('@pages/LogsPages/SingUp/singup'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path='welcome' element={<Suspense fallback={null}><Welcome /></Suspense>} />
          <Route path='i' element={<Suspense fallback={null}><Logs /></Suspense>}>
            <Route path='logIn' element={<Suspense fallback={null}><LogIn /></Suspense>} />
            <Route path='singUp' element={<Suspense fallback={null}><SingUp /></Suspense>} />
          </Route>
          <Route path='singUp' element={<Suspense fallback={null}><SingUp /></Suspense>} />
          <Route path='/' element={<App />}>
            <Route path='home' element={<Suspense fallback={null}><Home /></Suspense>} />
            <Route path='profile/:name' element={<Suspense fallback={null}><Profile /></Suspense>} />
          </Route>
        </Routes>
      </Router>
    </UserContextProvider>
  </React.StrictMode>
)
