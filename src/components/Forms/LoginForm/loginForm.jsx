import { Formik, Form, Field, ErrorMessage } from 'formik'

import { Link, useNavigate } from 'react-router-dom'
import useUser from '@hooks/useUser'

const validateForm = values => {
  const errors = {}
  if (!values.nick) errors.nick = 'Este campo no puede estar vacio'
  if (!values.passw) errors.passw = 'Este campo no puede estar vacio'

  return errors
}

export default function LoginForm () {
  const navigate = useNavigate()
  const { loginUser, error } = useUser()

  const handleSubmit = (values) => {
    loginUser({ nick: values.nick, passw: values.passw })
  }

  return (
    <Formik
      initialValues={{
        nick: '',
        passw: ''
      }}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      <Form className='form'>
        <i className='close-window' onClick={() => navigate('/welcome')}>✖</i>
        <h2>Login</h2>
        <div className='form-inputs'>
          <div className='input-container'>
            <Field className='input-form' type='text' name='nick' />
            <label className='label-form' htmlFor='nick'>Nick</label>
            <ErrorMessage className='error' name='nick' component='span' />
          </div>
          <div className='input-container'>
            <Field className='input-form' type='password' name='passw' />
            <label className='label-form' htmlFor='passw'>Password</label>
            <ErrorMessage className='error' name='passw' component='span' />
          </div>
          {error && <p className='error'>El usuario o la contraseña no son válidos</p>}
          <button className='btn primary' type='submit'><span>Login</span></button>
        </div>
        <div className='registro-link'>
          <span>
            No estas Registrado?  <Link to='/i/singUp'>Registrarse</Link>
          </span>
        </div>
      </Form>
    </Formik>
  )
}
