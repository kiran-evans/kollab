import { Link } from 'react-router-dom'
import './UserProfileMenu.css'

export default function UserProfileMenu() {
  return (
    <div className="user-profile-menu">
      <p>@username</p>
      <Link to='/post/currentuserid'>My Post</Link>
      <Link to='/preference'>Preferences</Link>
      <Link to='/ logout'>Logout</Link>
    </div>
  )
}