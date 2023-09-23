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
      {
        state?.user ? <div className="user-auth">
          <Link to='/register'>
            Register
            </Link>
            <Link to='/login'>
              Login
            </Link>
        </div>: <label htmlFor="user-profile-check">
                  <div className='user-icon'>{state.user?.username ?? ':)'}</div>
                  <input type="checkbox" name="user-profile-check" id="user-profile-check" />
                  <UserProfileMenu />
          </label>
      }
    </div>
    </>
  )
}

export default UserProfile