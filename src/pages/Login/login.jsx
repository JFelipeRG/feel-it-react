import './login.css'

import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import useUser from '@hooks/useUser'

export default function Login () {
  const [nick, setNick] = useState('')
  const [passw, setPassw] = useState('')
  const { login } = useUser()
  const navigate = useNavigate()
  const { isLogged } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/home')
  }, [isLogged])

  const handleSubmit = e => {
    e.preventDefault()
    login(nick, passw)
  }

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='input-container'>
          <input className='input-form' id='nick' type='text' onChange={e => setNick(e.target.value)} />
          <label className='label-form' htmlFor='nick'>Nick</label>
        </div>
        <div className='input-container'>
          <input className='input-form' id='passw' type='password' onChange={e => setPassw(e.target.value)} />
          <label className='label-form' htmlFor='passw'>Password</label>
        </div>
        <div className='button-container'>
          <button className='button-form'>Login</button>
        </div>
        <div>
          <span>
            No estas Registrado?  <Link to='/singUp'>Registrarse</Link>
          </span>
        </div>
      </form>
    </div>
  )
}
