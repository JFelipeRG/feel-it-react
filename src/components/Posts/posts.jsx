import './posts.css'

export default function Post (props) {
  console.log(props)
  return (
    <div className='post'>
      <div className='post-userinfo'>
        <img src='/src/assets/img/default-user.png' alt='profile image' />
        <div>
          <p><b>{props.usuario.name}</b></p>
          <p>{props.usuario.nick}</p>
        </div>
      </div>
      <p className='post-text'>{props.contenido}</p>
      <div className='post-song'>
        <h1>Aqui va la cancion</h1>
      </div>
    </div>
  )
}
