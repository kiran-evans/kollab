import { Logout, Tune } from '@mui/icons-material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../lib/ContextProvider';
import { fb } from '../../lib/firebase';
import Login from '../../pages/login/Login';
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
            {state.user ? 
                <>
                <p>@{state.user.username}</p>
                <Link to={`/${state.user.username}/posts`}>My Posts</Link>
                <Link to='/preferences'><Tune />&nbsp;Preferences</Link>
                <Link to='/' onClick={handleLogout}><Logout />&nbsp;Logout</Link>
                </>
                :
                <Link to='/login'><Login />&nbsp;Login</Link>
            }
        </div>
    )
}