import { Formik, Form, Field, ErrorMessage } from 'formik'
import PreviewImage from '@components/PreviewImage/PreviewImage'
import useUser from '@hooks/useUser'

import React, { useRef, useState } from 'react'

const validateForm = values => {
  const errors = {}
  const fileTypes = ['image/jpg', 'image/jpeg', 'image/png']

  if (!values.name) errors.name = 'Este campo no puede estar vacio'

  if (!values.nick) errors.nick = 'Este campo no puede estar vacio'

  if (values.file) {
    if (values.file.size > 200000) errors.file = 'Archivo demasiado grande'

    if (!fileTypes.includes(values.file.type)) errors.file = 'Formato de archivo no valido'
  }

  return errors
}

export default function UpdateForm ({ onClose }) {
  const { user, updateUser, error } = useUser()
  const [image, setImage] = useState(async () => {
    const res = await fetch(`http://localhost:3002/api/user/img/${user.profile_img}`)
    const datos = await res.blob()
    setImage(datos)
  })

  const imageRef = useRef()

  const restartImage = (setField) => {
    setField('file', '')
    imageRef.current.value = null
  }

  const handleSubmit = (values) => {
    updateUser({
      id: user.id,
      name: values.name,
      nick: values.nick,
      profileimg: values.file,
      onClose
    })
  }

  return (
    <div>
      <Formik
        initialValues={{
          file: '',
          name: user.name,
          nick: user.nick,
          passw: '',
          passw2: ''
        }}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className='form'>
            <h2>Editar Perfil</h2>
            <div className='input-container img'>
              {values.file && <button onClick={() => restartImage(setFieldValue)}>🔙</button>}
              <PreviewImage file={values.file || image} />
              <div className='input-file'>
                <label htmlFor='file' className='btn primary input-file-btn'>Seleccionar</label>
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
            {console.log(error)}
            {
              error && <p className='error'>Nick ya registrado</p>
            }
            <div className='button-container'>
              <button className='btn primary' type='submit'>Guardar</button>
              <button type='button' className='btn secondary' onClick={onClose}>Cancelar</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
