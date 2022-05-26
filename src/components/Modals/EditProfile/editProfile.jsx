import '../index.css'
import '@styles/logs.styles.css'
import './editProfile.css'

import ReactDOM from 'react-dom'

import UpdateForm from '@components/UpdateForm/updateForm'

function EditProfile ({ onClose }) {
  const handleSubmit = (values) => {  
  }

  return (
    <div className='blur-back center'>
      <div className='edit-container'>
        <UpdateForm handleSubmit={handleSubmit} onClose={onClose} />
      </div>
    </div>
  )
}

export default function EditProfilePortal ({ onClose }) {
  return ReactDOM.createPortal(
    <EditProfile onClose={onClose} />,
    document.getElementById('modals')
  )
}
