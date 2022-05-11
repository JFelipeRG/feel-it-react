import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <aside>
      <nav>
        <Link to='/home'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/post'>Post</Link>
        <Link to='logout'>Log Out</Link>
      </nav>
    </aside>
  )
}
