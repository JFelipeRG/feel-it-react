import '@styles/forms.styles.css'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useUser from '@hooks/useUser'
import LoginForm from '@components/Forms/LoginForm/loginForm'

export default function Login () {
  const navigate = useNavigate()
  const { isLogged } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/home')
  }, [isLogged])

  return (
    <>
      {isLogged || <LoginForm />}
    </>
  )
}
