import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { UserContextProvider } from './context/UserContext'

import App from './App'

const Welcome = React.lazy(() => import('@pages/Welcome/welcome'))

const Home = React.lazy(() => import('@pages/Home/home'))
const Profile = React.lazy(() => import('@pages/Profile/profile'))

const Logs = React.lazy(() => import('@pages/Logs/index'))
const LogIn = React.lazy(() => import('@pages/Logs/Login/login'))
const SingUp = React.lazy(() => import('@pages/Logs/SingUp/singup'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path='welcome' element={<React.Suspense fallback={null}><Welcome /></React.Suspense>} />
          <Route path='i' element={<React.Suspense fallback={null}><Logs /></React.Suspense>}>
            <Route path='logIn' element={<React.Suspense fallback={null}><LogIn /></React.Suspense>} />
            <Route path='singUp' element={<React.Suspense fallback={null}><SingUp /></React.Suspense>} />
          </Route>
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
