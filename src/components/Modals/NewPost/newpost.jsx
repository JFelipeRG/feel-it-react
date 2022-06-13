import Song from '@components/Song/song'
import './newpost.css'
import '../index.css'

import { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'

import Search from '@components/Search/search'

import useUser from '@hooks/useUser'
import usePosts from '@hooks/usePosts'

function ModalPost ({ onClose, updatePage }) {
  const modalRef = useRef()
  const textRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      modalRef.current.classList.add('visible')
    }, 100)
  }, [])

  const { user } = useUser()
  const { newPost } = usePosts()
  const [error, setError] = useState(false)

  const [songSelected, setSongSelected] = useState({
    song: [],
    hasSong: false
  })

  const selectSong = props => {
    setSongSelected({
      song: { ...props },
      hasSong: true
    })
  }

  const handleClick = () => {
    if (songSelected.song.length === 0) return setError(true)

    const textPost = textRef.current.value || null

    newPost({
      user: user.id,
      text: textPost,
      song: songSelected.song.id,
      closeModal: onClose,
      updatePage
    })

    updatePage(false)
    setError(false)
  }

  const closeModal = () => {
    modalRef.current.classList.remove('visible')
    setTimeout(() => {
      onClose()
    }, 500)
  }

  return (
    <div className='blur-back'>
      <div ref={modalRef} className='modal-container slice'>
        <i className='close-window' onClick={closeModal}>✖</i>
        <div className='info-post'>
          <div>
            <textarea ref={textRef} placeholder='Exprésate...' maxLength='180' />
          </div>
          <div>
            <Search songSelect={selectSong} />
            {
              songSelected.hasSong
                ? (
                  <Song {...songSelected.song} />
                  )
                : (
                  <Song />
                  )
            }
            {
              error && <span className='error'>Seleccione una canción por favor</span>
            }
          </div>
          <button onClick={handleClick} className='btn secondary'><span>Postear</span></button>
        </div>
      </div>
    </div>
  )
}

export default function NewPostPortal ({ onClose, updatePage }) {
  return ReactDOM.createPortal(
    <ModalPost onClose={onClose} updatePage={updatePage} />,
    document.getElementById('modals')
  )
}
