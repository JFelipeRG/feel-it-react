import { useNavigate } from 'react-router-dom'
import useUser from '@hooks/useUser'
import { useEffect } from 'react'

export default function Login () {
  const navigate = useNavigate()
  const { isLogged } = useUser()

  useEffect(() => {
    console.log(isLogged)
    if (isLogged) navigate('/home')
  }, [isLogged])

  const handleSubmit = e => {
    e.preventDefault()
    window.alert('Quieres hacer registro')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='img-profile' />
          <input id='img-profile' type='file' />
        </div>
        <div>
          <label htmlFor='user'>Nick</label>
          <input id='nick' type='text' />
        </div>
        <div>
          <label htmlFor='passw'>Password</label>
          <input id='passw' type='password' />
        </div>
        <div>
          <input type='submit' value='Registrarse' />
        </div>
      </form>
    </div>
  )
}
