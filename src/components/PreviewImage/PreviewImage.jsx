import { useState } from 'react'

export default function PreviewImage ({ file }) {
  const [preview, setPreview] = useState('src/assets/img/default-user.png')

  if (file) {
    // eslint-disable-next-line no-undef
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setPreview(reader.result)
    }
  }

  return (
    <div>
      <img src={preview} alt='preview' width='100px' height='100px' />
    </div>
  )
}
