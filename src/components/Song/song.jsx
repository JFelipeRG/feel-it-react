import './song.css'

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
              <span>Link YT</span>
              <span>Link Spoti</span>
            </div>
          </>
          )
        : (
          <h3>Selecciona una cancion...</h3>
          )}
    </div>
  )
}
