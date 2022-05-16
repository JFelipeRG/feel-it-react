import '@styles/logs.styles.css'

import { Formik, Form, Field, ErrorMessage } from 'formik'

import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { $$ } from '@utils/dom'

import useUser from '@hooks/useUser'

const validateForm = values => {
  const errors = {}
  if (!values.nick) errors.nick = 'Este campo no puede estar vacio'
  if (!values.passw) errors.passw = 'Este campo no puede estar vacio'

  return errors
}

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
    target.value !== '' ? label[i].style.transform = 'translateY(-20px)' : label[i].style.transform = ''
  }

  return (
    <div className='form-container'>
      <Formik
        initialValues={{
          nick: '',
          passw: ''
        }}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form className='form'>
          <h2>Login</h2>
          <div className='input-container'>
            <Field className='input-form' type='text' name='nick' onBlur={({ target }) => handleBlur(target, 0)} />
            <label className='label-form' htmlFor='nick'>Nick</label>
            <ErrorMessage className='error' name='nick' component='span' />
          </div>
          <div className='input-container'>
            <Field className='input-form' type='password' name='passw' onBlur={({ target }) => handleBlur(target, 1)} />
            <label className='label-form' htmlFor='passw'>Password</label>
            <ErrorMessage className='error' name='passw' component='span' />
          </div>
          {error.state && <p className='error'>{error.message}</p>}
          <button className='button-form' type='submit'>Login</button>
          <div>
            <span>
              No estas Registrado?  <Link to='/singUp'>Registrarse</Link>
            </span>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
