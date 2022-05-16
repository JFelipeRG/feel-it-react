import '@styles/logs.styles.css'

import { Formik, Form, Field, ErrorMessage } from 'formik'

import { $$ } from '@utils/dom'

import { useNavigate, Link } from 'react-router-dom'
import useUser from '@hooks/useUser'
import { useEffect } from 'react'
import PreviewImage from '@components/PreviewImage/PreviewImage'

const validateForm = values => {
  const errors = {}
  const fileTypes = ['image/jpg', 'image/jpeg', 'image/png']

  if (!values.nick) errors.nick = 'Este campo no puede estar vacio'

  if (!values.passw) errors.passw = 'Este campo no puede estar vacio'

  if (!values.passw2) errors.passw2 = 'Este campo no puede estar vacio'

  if (values.passw !== values.passw2) errors.passw2 = 'Las contraseñas no coinciden'

  if (!fileTypes.includes(values.file.type)) errors.file = 'Formato de archivo no valido'

  if (values.file.size > 153600) errors.file = 'Archivo demasiado grande'

  return errors
}

export default function Login () {
  const navigate = useNavigate()
  const { isLogged } = useUser()

  useEffect(() => {
    if (isLogged) navigate('/home')
  }, [isLogged])

  const handleSubmit = (values) => {
    const archivo = values.file
    archivo.Move('/src/assets/' + archivo.name)
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
          file: '',
          nick: '',
          passw: '',
          passw2: ''
        }}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className='form'>
            <h2>Registrar</h2>
            <div className='input-container'>
              <PreviewImage file={values.file} />
              <input
                id='file' type='file' onChange={(e) => {
                  setFieldValue('file', e.target.files[0])
                }}
              />
              <ErrorMessage className='error' name='file' component='span' />
            </div>
            <div className='input-container'>
              <Field className='input-form' id='nick' name='nick' type='text' onBlur={({ target }) => handleBlur(target, 0)} />
              <label className='label-form' htmlFor='user'>Nick</label>
              <ErrorMessage className='error' name='nick' component='span' />
            </div>
            <div className='input-container'>
              <Field className='input-form' id='passw' name='passw' type='password' onBlur={({ target }) => handleBlur(target, 1)} />
              <label className='label-form' htmlFor='passw'>Password</label>
              <ErrorMessage className='error' name='passw' component='span' />
            </div>
            <div className='input-container'>
              <Field className='input-form' id='passw2' name='passw2' type='password' onBlur={({ target }) => handleBlur(target, 2)} />
              <label className='label-form' htmlFor='passw2'>Confirm Password</label>
              <ErrorMessage className='error' name='passw2' component='span' />
            </div>
            <div className='button-container'>
              <button className='button-form' type='submit'>Registrarse</button>
              <Link to='/login'>
                <button className='button-form'>Volver</button>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
