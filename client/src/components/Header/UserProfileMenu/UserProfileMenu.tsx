import { AccountCircle, FolderShared, Login, Logout, } from '@mui/icons-material'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../lib/ContextProvider'
import { fb } from '../../../lib/firebase'
import './UserProfileMenu.css'
import Theme from '../Theme/Theme'

export const UserProfileMenu = () => {
    const { state, dispatch } = useContext(AppContext);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    
    document.body.setAttribute("data-theme", localStorage.getItem("theme") || "dark");
    
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
                            <Link to='/preferences'><li><AccountCircle />&nbsp;My Profile</li></Link>
                            <Link to={`/user/${state.user.username}`}><li><FolderShared/> &nbsp;My Posts</li></Link>
                            <Theme />
                            <Link to='/' onClick={handleLogout}><li><Logout />&nbsp;Logout</li></Link>
                        </ul>
                    }
                </>
                :
                <>
                    <Theme iconOnly={true} />
                    &nbsp;&nbsp;
                    &nbsp;
                    <Link to="/login"><Login />&nbsp;Login</Link>
                </>
            }
        </nav>
    )
}