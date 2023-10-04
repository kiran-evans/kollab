import { AccountCircle, Login, Logout, Tune, DarkMode, LightMode } from '@mui/icons-material'
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
    const toggleTheme = () => {
        const bd = document.getElementsByTagName("body")[0]
        const dtTheme = bd.getAttribute("data-theme")
        
        if (dtTheme !== "light" ) {
            bd.setAttribute("data-theme", "light")
            document.documentElement.style.setProperty("color-scheme", "light")
        } else {
            bd.setAttribute("data-theme", "dark")
            document.documentElement.style.setProperty("color-scheme", "dark")
        }
    }

    return (
        <nav>
            {state.user ? 
                <>
                    <div id="profile-icon" onClick={() => setMenuIsOpen(!menuIsOpen)}>@{state.user.username}&nbsp;<AccountCircle /></div>
                    {menuIsOpen && 
                        <ul id="user-profile-menu" onClick={() => setMenuIsOpen(false)}>
                            <Link to={`/user/${state.user.username}`}><li><AccountCircle />&nbsp;My Profile</li></Link>
                            <Link to='/preferences'><li><Tune />&nbsp;Preferences</li></Link>
                            <a onClick={toggleTheme}><li><DarkMode />&nbsp;<LightMode />&nbsp;Theme</li></a>
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