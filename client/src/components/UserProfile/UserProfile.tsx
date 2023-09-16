import { Link } from 'react-router-dom'
import './UserProfile.css'
import UserProfileMenu from '../UserProfileMenu/UserProfileMenu'
function UserProfile() {
  return (
    <>
    <div className='user-session'>
      <div className="user-auth">
        {/* Display only if not logged in*/}
        <Link to='/register'>
          Register
        </Link>
        <Link to='/login'>
          Login
        </Link>
      </div>
      <label htmlFor="user-profile-check">
      <div className='user-icon'>USR</div>
      </label>
      <input type="checkbox" name="user-profile-check" id="user-profile-check" />
      <UserProfileMenu />
    </div>
    </>
  )
}

export default UserProfile