import '@styles/forms.styles.css'
import '../index.css'

import ReactDOM from 'react-dom'
import ChangePasswForm from '@components/Forms/ChangePasswForm/changePasswForm'

function ChangePassw ({ onClose }) {
  return (
    <div className='blur-back center'>
      <div className='modal-container'>
        <ChangePasswForm onClose={onClose} />
      </div>
    </div>
  )
}

export default function ChangePasswPortal ({ onClose }) {
  return ReactDOM.createPortal(
    <ChangePassw onClose={onClose} />,
    document.getElementById('modals')
  )
}
