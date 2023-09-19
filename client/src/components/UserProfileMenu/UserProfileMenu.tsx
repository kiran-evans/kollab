import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../lib/ContextProvider';
import './UserProfileMenu.css';

export default function UserProfileMenu() {
    const { state } = useContext(AppContext);
  return (
    <div className="user-profile-menu">
          <p>@{state.user?.username ?? ':)'}</p>
      <Link to='/post/currentuserid'>My Post</Link>
      <Link to='/preference'>Preferences</Link>
      <Link to='/ logout'>Logout</Link>
    </div>
  )
}