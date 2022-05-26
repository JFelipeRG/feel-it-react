import { useState } from 'react'

export default function PreviewImage ({ file }) {
  const [preview, setPreview] = useState('/src/assets/img/default-user.png')
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
      <img className='preview' src={preview} alt='preview' width='80px' height='80px' />
    </div>
  )
}
