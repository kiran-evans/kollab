import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../lib/ContextProvider'
import UserProfileMenu from '../UserProfileMenu/UserProfileMenu'
import './UserProfile.css'
function UserProfile() {
    const { state } = useContext(AppContext);
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
                  <div className='user-icon'>{state.user?.username ?? ':)'}</div>
      </label>
      <input type="checkbox" name="user-profile-check" id="user-profile-check" />
      <UserProfileMenu />
    </div>
    </>
  )
}

export default UserProfile