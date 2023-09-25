import { Collapse } from '@mui/material'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../lib/ContextProvider'
import UserProfileMenu from '../UserProfileMenu/UserProfileMenu'
import './UserProfile.css'
function UserProfile() {
    const { state } = useContext(AppContext);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
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
                <div className='user-icon' onClick={() => setMenuIsOpen(!menuIsOpen)}>{state.user?.username.slice(0, 2) ?? ':)'}</div>
                <Collapse in={menuIsOpen}>
                    <UserProfileMenu /> 
                </Collapse>
            </div>
        </>
    )
}

export default UserProfile