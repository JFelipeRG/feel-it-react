import { Formik, Form, Field, ErrorMessage } from 'formik'
import PreviewImage from '@components/PreviewImage/PreviewImage'

import { useNavigate } from 'react-router-dom'

import useUser from '@hooks/useUser'
import { useRef } from 'react'
import BackIcon from '@components/Icons/backIcon'

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

export default function RegisterForm () {
  const navigate = useNavigate()
  const { error, registerUser } = useUser()

  const imageRef = useRef()

  const restartImage = (setField) => {
    setField('file', '')
    imageRef.current.value = null
  }

  const handleSubmit = (values) => {
    registerUser({
      name: values.name,
      nick: values.nick,
      passw: values.passw,
      profileimg: values.file
    })
  }

  return (
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
          <i className='close-window' onClick={() => navigate('/welcome')}>✖</i>
          <h2>Registro</h2>
          <div className='input-container img'>
            {values.file && <span title='Deshacer' className='back-image-button' onClick={() => restartImage(setFieldValue)}><BackIcon /></span>}
            <PreviewImage file={values.file} />
            <div className='input-file'>
              <label htmlFor='file' className='btn secondary input-file-btn'><span>Seleccionar</span></label>
              <input
                ref={imageRef}
                id='file' type='file' onChange={(e) => {
                  setFieldValue('file', e.target.files[0])
                }}
              />
            </div>
          </div>
          <ErrorMessage className='error' name='file' component='span' />
          <div className='input-container'>
            <Field className='input-form' id='name' name='name' type='text' />
            <label className='label-form' htmlFor='user'>Name</label>
            <ErrorMessage className='error' name='name' component='span' />
          </div>
          <div className='input-container'>
            <Field className='input-form' id='nick' name='nick' type='text' />
            <label className='label-form' htmlFor='user'>Nick</label>
            <ErrorMessage className='error' name='nick' component='span' />
          </div>
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
          {error && <p className='error'>El usario ya registrado</p>}
          <button className='btn primary' type='submit'><span>Registrarse</span></button>
        </Form>
      )}
    </Formik>
  )
}
