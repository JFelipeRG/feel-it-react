import Song from '@components/Song/song'
import { getDiffTime } from '@utils/dates'
import { Link } from 'react-router-dom'
import './posts.css'

export default function Post (props) {
  const urlImg = props.usuario.profile_img ? `http://localhost:3002/api/user/img/${props.usuario.profile_img}` : '/src/assets/img/default-user.png'

  const diffTime = getDiffTime(props.fecha_post)

  return (
    <div className='post'>
      <div className='post-info'>
        <Link to={'/profile/' + props.usuario.nick}>
          <img src={urlImg} alt='profile image' />
        </Link>
        <div>
          <Link to={'/profile/' + props.usuario.nick}>
            <p><b>{props.usuario.name}</b> @{props.usuario.nick} · {diffTime}</p>
          </Link>
          <p className='post-text'>{props.contenido}</p>
        </div>
      </div>
      <div className='post-song'>
        <Song {...props.cancion} />
      </div>
    </div>
  )
}
