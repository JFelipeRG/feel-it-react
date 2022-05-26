import { Formik, Form, Field, ErrorMessage } from 'formik'
import PreviewImage from '@components/PreviewImage/PreviewImage'

import { Link } from 'react-router-dom'

const validateForm = values => {
  const errors = {}
  const fileTypes = ['image/jpg', 'image/jpeg', 'image/png']

  if (!values.name) errors.name = 'Este campo no puede estar vacio'

  if (!values.nick) errors.nick = 'Este campo no puede estar vacio'

  if (!values.passw) errors.passw = 'Este campo no puede estar vacio'

  if (!values.passw2) errors.passw2 = 'Este campo no puede estar vacio'

  if (values.passw !== values.passw2) errors.passw2 = 'Las contraseñas no coinciden'

  if (values.file) {
    if (values.file.size > 200000) errors.file = 'Archivo demasiado grande'

    if (!fileTypes.includes(values.file.type)) errors.file = 'Formato de archivo no valido'
  }

  return errors
}

export default function RegisterForm ({ handleBlur, handleSubmit, error }) {
  return (
    <div className='form-container'>
      <Formik
        initialValues={{
          file: '',
          name: '',
          nick: '',
          passw: '',
          passw2: ''
        }}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className='form'>
            <h2>Registro</h2>
            <div className='input-container img'>
              <PreviewImage file={values.file} />
              <div className='input-file'>
                <label htmlFor='file' className='btn primary input-file-btn'>Seleccionar</label>
                <input
                  id='file' type='file' onChange={(e) => {
                    setFieldValue('file', e.target.files[0])
                  }}
                />
              </div>
            </div>
            <ErrorMessage className='error' name='file' component='span' />
            <div className='input-container'>
              <Field className='input-form' id='name' name='name' type='text' onBlur={({ target }) => handleBlur(target, 0)} />
              <label className='label-form' htmlFor='user'>Name</label>
              <ErrorMessage className='error' name='name' component='span' />
            </div>
            <div className='input-container'>
              <Field className='input-form' id='nick' name='nick' type='text' onBlur={({ target }) => handleBlur(target, 1)} />
              <label className='label-form' htmlFor='user'>Nick</label>
              <ErrorMessage className='error' name='nick' component='span' />
            </div>
            <div className='input-container'>
              <Field className='input-form' id='passw' name='passw' type='password' onBlur={({ target }) => handleBlur(target, 2)} />
              <label className='label-form' htmlFor='passw'>Password</label>
              <ErrorMessage className='error' name='passw' component='span' />
            </div>
            <div className='input-container'>
              <Field className='input-form' id='passw2' name='passw2' type='password' onBlur={({ target }) => handleBlur(target, 3)} />
              <label className='label-form' htmlFor='passw2'>Confirm Password</label>
              <ErrorMessage className='error' name='passw2' component='span' />
            </div>
            {error && <p className='error'>El usario ya registrado</p>}
            <div className='button-container'>
              <button className='btn primary' type='submit'>Registrarse</button>
              <Link to='/login'>
                <button className='btn secondary'>Volver</button>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
