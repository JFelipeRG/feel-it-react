import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '@pages/Home/home'
import Post from '@pages/NewPost/post'
import Profile from '@pages/Profile/profile'

import LogIn from '@pages/Login/login'
import LogOut from '@pages/LogOut/logout'
import SingUp from '@pages/SingUp/singup'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='logIn' element={<LogIn />} />
        <Route path='logOut' element={<LogOut />} />
        <Route path='singUp' element={<SingUp />} />
        <Route path='/' element={<App />}>
          <Route path='home' element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='post' element={<Post />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
