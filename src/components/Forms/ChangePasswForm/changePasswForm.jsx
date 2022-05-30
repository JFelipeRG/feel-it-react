import { Formik, Form, Field, ErrorMessage } from 'formik'

import useUser from '@hooks/useUser'
import { useState } from 'react'

const validateForm = values => {
  const errors = {}

  if (!values.passw) errors.passw = 'Este campo no puede estar vacio'

  if (!values.passw2) errors.passw2 = 'Este campo no puede estar vacio'

  if (values.passw !== values.passw2) errors.passw2 = 'Las contraseñas no coinciden'

  return errors
}

export default function ChangePasswForm ({ onClose }) {
  const [successful, setSuccessful] = useState(false)

  const { newPassw, error } = useUser()

  const handleSubmit = (values) => {
    newPassw({ passw: values.passw, setSuccessful })
  }

  return (
    <Formik
      initialValues={{
        passw: '',
        passw2: ''
      }}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      <Form className='form'>
        <i className='close-window' onClick={onClose}>✖</i>
        <h2>Cambiar Contraseña</h2>
        <div className='input-container'>
          <Field className='input-form' id='passw' name='passw' type='password' />
          <label className='label-form' htmlFor='passw'>Password</label>
          <ErrorMessage className='error' name='passw' component='span' />
        </div>
        <div className='input-container'>
          <Field className='input-form' id='passw2' name='passw2' type='password' />
          <label className='label-form' htmlFor='passw2'>Confirm Password</label>
          <ErrorMessage className='error' name='passw2' component='span' />
        </div>
        {error && <p className='error'>La nueva contraseña no puede ser la misma que la actual</p>}
        {successful && <p className='success'>Contraseña cambiada con exito</p>}
        <div className='button-container'>
          <button className='btn primary' type='submit'>Registrarse</button>
        </div>
      </Form>
    </Formik>
  )
}
