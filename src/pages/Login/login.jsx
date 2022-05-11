import { Link } from 'react-router-dom'

const handleSubmit = e => {
  e.preventDefault()
  window.sessionStorage.setItem('userLog', 'Sesión Iniciada')
}

export default function Login () {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='nick'>Nick</label>
          <input id='nick' type='text' />
        </div>
        <div>
          <label htmlFor='passw'>Password</label>
          <input id='passw' type='password' />
        </div>
        <div>
          <input type='submit' value='Login' />
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
