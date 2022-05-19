import Song from '@components/Song/song'
import './newpost.css'

export default function ModalPost ({ refItem, onClose }) {
  return (
    <div ref={refItem} className='new-post'>
      <div className='info-post'>
        <i onClick={onClose}>✖</i>
        <div>
          <textarea placeholder='Exprésate...' maxLength='180' />
        </div>
        <div>
          <input type='text' />
          <Song />
        </div>
        <button className='btn' disabled>Postear</button>
      </div>
    </div>
  )
}
