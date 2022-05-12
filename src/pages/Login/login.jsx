import './login.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import useNav from '@hooks/useNav'
import useUser from '@hooks/useUser'

export default function Login () {
  const [nick, setNick] = useState('')
  const [passw, setPassw] = useState('')
  const { login } = useUser()
  useNav()

  const handleSubmit = e => {
    e.preventDefault()
    login(nick, passw)
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='nick'>Nick</label>
          <input id='nick' type='text' onChange={e => setNick(e.target.value)} />
        </div>
        <div>
          <label htmlFor='passw'>Password</label>
          <input id='passw' type='password' onChange={e => setPassw(e.target.value)} />
        </div>
        <div>
          <button>Login</button>
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
