import './posts.css'

export default function Post (props) {
  const urlImg = props.usuario.profile_img ? `http://localhost:3002/api/user/img/${props.usuario.profile_img}` : '/src/assets/img/default-user.png'
  return (
    <div className='post'>
      <div className='post-userinfo'>
        <img src={urlImg} alt='profile image' />
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
