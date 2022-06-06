import { useNavigate } from 'react-router-dom'
import useUser from '@hooks/useUser'
import { useEffect } from 'react'
import RegisterForm from '@components/Forms/RegisterForm/registerForm'

export default function Login () {
  const navigate = useNavigate()
  const { isLogged } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/home')
  }, [isLogged])

  return (
    <>
      {isLogged || <RegisterForm />}
    </>
  )
}
