import '@styles/logs.styles.css'

import { $$ } from '@utils/dom'

import { useNavigate } from 'react-router-dom'
import useUser from '@hooks/useUser'
import { useEffect } from 'react'
import RegisterForm from '@components/RegisterForm/registerForm'

export default function Login () {
  const navigate = useNavigate()
  const { isLogged, registerUser, error } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/home')
  }, [isLogged])

  const handleSubmit = (values) => {
    registerUser({
      name: values.name,
      nick: values.nick,
      passw: values.passw,
      profileimg: values.file
    })
  }

  const handleBlur = (target, index) => {
    const label = $$('.label-form')
    const i = index
    target.value !== '' ? label[i].classList.add('noempty') : label[i].classList.remove('noempty')
  }

  return (
    <>
      {isLogged || <RegisterForm handleBlur={handleBlur} handleSubmit={handleSubmit} error={error} />}
    </>
  )
}
