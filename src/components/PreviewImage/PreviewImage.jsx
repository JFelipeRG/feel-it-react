import { useState } from 'react'
import imgDefault from '@assets/img/default-user.png'

export default function PreviewImage ({ file }) {
  const [preview, setPreview] = useState(null)
  const fileTypes = ['image/jpg', 'image/jpeg', 'image/png']

  if (file) {
    if (fileTypes.includes(file.type)) {
      // eslint-disable-next-line no-undef
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setPreview(reader.result)
      }
    }
  }

  return (
    <div>
      <img className='preview' src={file ? preview : imgDefault} alt='preview' width='100px' height='100px' />
    </div>
  )
}
