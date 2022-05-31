import ReactDOM from 'react-dom'

import '../index.css'
import usePosts from '@hooks/usePosts'

function RemovePost ({ onClose, idPost, idSong }) {
  const { removePost } = usePosts()

  const handleClick = () => {
    removePost({ id: idPost, song: idSong })
    onClose()
  }

  return (
    <div className='blur-back center'>
      <div className='modal-container'>
        <div className='confirm-action'>
          <p>Estas Seguro de que quiere eliminar el post?</p>
          <div className='links-options'>
            <button className='links btn primary' onClick={handleClick}><span>Borrar</span></button>
            <button className='links btn secondary' to='#' onClick={onClose}><span>Cancelar</span></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RemovePortal ({ onClose, idPost, idSong }) {
  return ReactDOM.createPortal(
    <RemovePost onClose={onClose} idPost={idPost} idSong={idSong} />,
    document.getElementById('modals')
  )
}
