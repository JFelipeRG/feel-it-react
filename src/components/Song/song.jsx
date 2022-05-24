import './song.css'

import YT from '@assets/SVG/youtube.svg'
import Spotify from '@assets/SVG/spotify.svg'

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
              <p><b>{props.nombre}</b></p>
              <p>{props.artista}</p>
            </div>
            <div className='links-songs'>
              <a href={props.link_yt} target='_blank' rel='noreferrer'><img src={YT} alt='' width={40} /></a>
              <a href={props.link_spoty} target='_blank' rel='noreferrer'><img src={Spotify} alt='' width={40} /></a>
            </div>
          </>
          )
        : (
          <h3>Selecciona una cancion...</h3>
          )}
    </div>
  )
}
