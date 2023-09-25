import { AccountCircle, LibraryBooks, Login, Logout, Tune } from '@mui/icons-material'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../lib/ContextProvider'
import { fb } from '../../../lib/firebase'
import './UserProfileMenu.css'

export const UserProfileMenu = () => {
    const { state, dispatch } = useContext(AppContext);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const handleLogout = async () => {
        // Sign the Firebase Auth User out
        await fb.auth.signOut();

        // Remove the User data from the state
        dispatch({ type: 'SET_USER', payload: null });
    }

    return (
        <nav>
            {state.user ? 
                <>
                    <div id="profile-icon" onClick={() => setMenuIsOpen(!menuIsOpen)}>@{state.user.username}&nbsp;<AccountCircle /></div>
                    {menuIsOpen && 
                        <ul id="user-profile-menu" onClick={() => setMenuIsOpen(false)}>
                            <Link to={`/${state.user.username}`}><li><AccountCircle />&nbsp;My Profile</li></Link>
                            <Link to={`/${state.user.username}/posts`}><li><LibraryBooks />&nbsp;My Posts</li></Link>
                            <Link to='/preferences'><li><Tune />&nbsp;Preferences</li></Link>
                            <Link to='/' onClick={handleLogout}><li><Logout />&nbsp;Logout</li></Link>
                        </ul>
                    }
                </>
                :
                <Link to="/login"><Login />&nbsp;Login</Link>
            }
        </nav>
    )
}