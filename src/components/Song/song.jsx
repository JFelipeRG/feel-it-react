import './song.css'

import { AiFillYoutube } from 'react-icons/ai'
import { BsSpotify } from 'react-icons/bs'

export default function Song (props) {
  const url = `http://localhost:3002/api/cancion/img/${props.caratula}`

  return (
    <div className='song-info'>
      {props.nombre
        ? (
          <>
            <div className='img'>
              <img src={url} alt='portada' />
            </div>
            <div className='tag-info'>
              <p>{props.nombre}</p>
              <p>{props.artista}</p>
            </div>
            <div className='links-songs'>
              <a href={props.link_yt} target='_blank' rel='noreferrer'><AiFillYoutube /></a>
              <a href={props.link_spoty} target='_blank' rel='noreferrer'><BsSpotify /></a>
            </div>
          </>
          )
        : (
          <h3>Selecciona una cancion...</h3>
          )}
    </div>
  )
}
