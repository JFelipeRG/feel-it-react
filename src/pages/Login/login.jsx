import useUser from '@hooks/useUser'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login () {
  const [nick, setNick] = useState('')
  const [passw, setPassw] = useState('')
  const navigate = useNavigate()
  const { isLogged, login } = useUser()

  useEffect(() => {
    console.log(isLogged)
    if (isLogged) navigate('/home')
  }, [isLogged])

  const handleSubmit = e => {
    e.preventDefault()
    login(nick, passw)
  }

  return (
    <div>
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
