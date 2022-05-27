import ReactDOM from 'react-dom'

import './removePost.css'
import '../index.css'
import usePosts from '@hooks/usePosts'

function RemovePost ({ onClose, idPost, idSong }) {
  const { removePost } = usePosts()

  const handleClick = () => {
    removePost({ id: idPost, song: idSong })
    onClose()
    window.location.reload(false)
  }

  return (
    <div className='blur-back center'>
      <div className='remove-container'>
        <div>
          <p>Estas Seguro de que quiere eliminar el post?</p>
          <div className='links-options'>
            <button className='links' onClick={handleClick}>Borrar</button>
            <button className='links' to='#' onClick={onClose}>Cancelar</button>
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
