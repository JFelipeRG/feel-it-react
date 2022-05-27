import '../index.css'
import '@styles/logs.styles.css'
import './editProfile.css'

import ReactDOM from 'react-dom'

import UpdateForm from '@components/Forms/UpdateForm/updateForm'

function EditProfile ({ onClose }) {
  return (
    <div className='blur-back center'>
      <div className='edit-container'>
        <UpdateForm onClose={onClose} />
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
