import { Link } from 'react-router-dom'
import './UserProfile.css'
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
      <div id='user-icon'>USR</div>
    </div>
    </>
  )
}

export default UserProfile