import Song from '@components/Song/song'
import './newpost.css'

import { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

import Search from '@components/Search/search'

import useUser from '@hooks/useUser'
import usePosts from '@hooks/usePosts'

function ModalPost ({ onClose }) {
  const textRef = useRef()

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
      closeModal: onClose
    })

    setError(false)
  }

  return (
    <div className='blur-back'>
      <div className='new-post'>
        <div className='info-post'>
          <i onClick={onClose}>✖</i>
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
          <button onClick={handleClick} className='btn'>Postear</button>
        </div>
      </div>
    </div>
  )
}

export default function NewPostPortal ({ onClose }) {
  return ReactDOM.createPortal(
    <ModalPost onClose={onClose} />,
    document.getElementById('modals')
  )
}
