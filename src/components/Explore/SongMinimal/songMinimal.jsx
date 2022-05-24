import './songsminimal.css'

import { AiFillYoutube } from 'react-icons/ai'
import { BsSpotify } from 'react-icons/bs'

export default function SongMinimal (props) {
  const url = `http://localhost:3002/api/cancion/img/${props.caratula}`
  return (
    <div className='song-minimal' title={props.nombre + ' - ' + props.artista}>
      <img src={url} alt='' />
      <div>
        <a href={props.link_yt} target='_blank' rel='noreferrer'><AiFillYoutube /></a>
        <a href={props.link_spoty} target='_blank' rel='noreferrer'><BsSpotify /></a>
      </div>
    </div>
  )
}
