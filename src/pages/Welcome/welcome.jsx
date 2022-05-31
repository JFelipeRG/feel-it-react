import './welcome.css'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useUser from '@hooks/useUser'

export default function Login () {
  const navigate = useNavigate()
  const { isLogged } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/home')
  }, [isLogged])

  return (
    <>
      {isLogged || (
        <div className='welcome-page'>
          <div className='background-welcome' />
          <div className='welcome-info'>
            <div className='welcome-title'>
              <h1>Feel It</h1>
              <h3>Expresa tu alma</h3>
            </div>
            <div className='welcome-links'>
              <div className='welcome-button'>
                <p>Únete a nuestra comunidad</p>
                <button className='btn secondary' onClick={() => navigate('/i/singUp')}><span>Registrarse</span></button>
              </div>
              <div className='welcome-button'>
                <p>Ya tienes cuenta?</p>
                <button className='btn primary' onClick={() => navigate('/i/login')}><span>Iniciar Sesión</span></button>
              </div>
            </div>
            <footer>
              <span>© Juan Felipe Ramirez Gaviria 2022</span>
            </footer>
          </div>
        </div>
      )}
    </>
  )
}
