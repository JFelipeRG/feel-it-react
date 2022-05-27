import '@styles/logs.styles.css'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { $$ } from '@utils/dom'

import useUser from '@hooks/useUser'
import LoginForm from '@components/Forms/LoginForm/loginForm'

export default function Login () {
  const navigate = useNavigate()
  const { isLogged, loginUser, error } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/home')
  }, [isLogged])

  const handleSubmit = (values) => {
    loginUser({ nick: values.nick, passw: values.passw })
  }

  const handleBlur = (target, index) => {
    const label = $$('.label-form')
    const i = index
    target.value !== '' ? label[i].classList.add('noempty') : label[i].classList.remove('noempty')
  }

  return (
    <>
      {isLogged || <LoginForm handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} />}
    </>
  )
}
