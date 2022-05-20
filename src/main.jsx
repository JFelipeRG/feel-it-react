import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { UserContextProvider } from './context/UserContext'

import App from './App'
import LogIn from '@pages/Login/login'

const Home = React.lazy(() => import('@pages/Home/home'))
const Profile = React.lazy(() => import('@pages/Profile/profile'))

const SingUp = React.lazy(() => import('@pages/SingUp/singup'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path='logIn' element={<LogIn />} />
          <Route path='singUp' element={<React.Suspense fallback={null}><SingUp /></React.Suspense>} />
          <Route path='/' element={<App />}>
            <Route path='home' element={<React.Suspense fallback={null}><Home /></React.Suspense>} />
            <Route path='profile/:name' element={<React.Suspense fallback={null}><Profile /></React.Suspense>} />
          </Route>
        </Routes>
      </Router>
    </UserContextProvider>
  </React.StrictMode>
)
