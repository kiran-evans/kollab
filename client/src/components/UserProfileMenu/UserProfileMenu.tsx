import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../lib/ContextProvider';
import { fb } from '../../lib/firebase';
import './UserProfileMenu.css';

export default function UserProfileMenu() {
    const { state, dispatch } = useContext(AppContext);

    const handleLogout = async () => {
        // Sign the Firebase Auth User out
        await fb.auth.signOut();

        // Remove the User data from the state
        dispatch({ type: 'SET_USER', payload: null });
    }

    return (
        <div className="user-profile-menu">
            <p>@{state.user?.username ?? ':)'}</p>
        <Link to='/post/currentuserid'>My Post</Link>
        <Link to='/preference'>Preferences</Link>
        <Link to='/' onClick={handleLogout}>Logout</Link>
        </div>
    )
}