import './song.css'

import { AiFillYoutube } from 'react-icons/ai'
import { BsSpotify } from 'react-icons/bs'

export default function Song (props) {
  return (
    <div className='song-info'>
      {props.name
        ? (
          <>
            <div className='img'>
              <img src='' alt='portada' />
            </div>
            <div className='tag-info'>
              <span>Nombre</span>
              <span>Artista</span>
            </div>
            <div className='links'>
              <AiFillYoutube />
              <BsSpotify />
            </div>
          </>
          )
        : (
          <h3>Selecciona una cancion...</h3>
          )}
    </div>
  )
}
