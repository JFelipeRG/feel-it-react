import './songMinimal.css'

import YT from '@assets/SVG/youtube.svg'
import Spotify from '@assets/SVG/spotify.svg'

export default function SongMinimal (props) {
  const url = `http://localhost:3002/api/cancion/img/${props.caratula}`
  return (
    <div className='song-minimal' title={props.nombre + ' - ' + props.artista}>
      <img src={url} alt='' />
      <div>
        <a href={props.link_yt} target='_blank' rel='noreferrer'><img src={YT} alt='' /></a>
        <a href={props.link_spoty} target='_blank' rel='noreferrer'><img src={Spotify} alt='' /></a>
      </div>
    </div>
  )
}
