import '@styles/logs.styles.css'

import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { $$ } from '@utils/dom'

import useUser from '@hooks/useUser'

export default function Login () {
  const [nick, setNick] = useState('')
  const [passw, setPassw] = useState('')
  const navigate = useNavigate()
  const { isLogged, error, login } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/home')
  }, [isLogged])

  const handleSubmit = e => {
    e.preventDefault()
    login({ nick, passw })
  }

  const handleBlur = (target, type) => {
    const label = $$('.label-form')
    const i = type === 'nick' ? 0 : 1
    target.value !== '' ? label[i].style.transform = 'translateY(-20px)' : label[i].style.transform = ''
  }

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='input-container'>
          <input className='input-form' id='nick' type='text' onChange={({ target }) => setNick(target.value)} onBlur={({ target }) => handleBlur(target, 'nick')} />
          <label className='label-form' htmlFor='nick'>Nick</label>
        </div>
        <div className='input-container'>
          <input className='input-form' id='passw' type='password' onChange={({ target }) => setPassw(target.value)} onBlur={({ target }) => handleBlur(target)} />
          <label className='label-form' htmlFor='passw'>Password</label>
        </div>
        {
          error
            ? (
              <div className='error-container'>
                <span className='error'>El usuario o la contraseña no son válidos</span>
              </div>
              )
            : (
                ''
              )
        }
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
