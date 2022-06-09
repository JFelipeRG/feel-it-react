import './song.css'

export default function Song (props) {
  const url = `https://peaceful-brook-00691.herokuapp.com/cancion/img/${props.caratula}`

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
          </>
          )
        : (
          <h3>Selecciona una cancion...</h3>
          )}
    </div>
  )
}
