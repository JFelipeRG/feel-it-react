import '@styles/logs.styles.css'

import { useNavigate, Link } from 'react-router-dom'
import useUser from '@hooks/useUser'
import { useEffect } from 'react'

export default function Login () {
  const navigate = useNavigate()
  const { isLogged } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/home')
  }, [isLogged])

  const handleSubmit = e => {
    e.preventDefault()
    window.alert('Quieres hacer registro')
  }

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <h2>Registrar</h2>
        <div className='input-container'>
          <input className='input-form' id='img-profile' type='file' />
        </div>
        <div className='input-container'>
          <input className='input-form' id='nick' type='text' />
          <label className='label-form' htmlFor='user'>Nick</label>
        </div>
        <div className='input-container'>
          <input className='input-form' id='passw' type='password' />
          <label className='label-form' htmlFor='passw'>Password</label>
        </div>
        <div className='input-container'>
          <input className='input-form' id='passw' type='password' />
          <label className='label-form' htmlFor='passw'>Confirm Password</label>
        </div>
        <div className='button-container'>
          <button className='button-form'>Registrarse</button>
          <Link to='/login'>
            <button className='button-form'>Volver</button>
          </Link>
        </div>
      </form>
    </div>
  )
}
