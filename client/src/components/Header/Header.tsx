import { Add } from '@mui/icons-material';
import './Header.css';
import Search from './Search/Search';
import { UserProfileMenu } from './UserProfileMenu/UserProfileMenu';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../lib/ContextProvider';

export const Header = () => {
    const { state } = useContext(AppContext);
    return (
        <header>
            <h1>
                <Link to='/'>
                    Collab-Rate
                </Link>
            </h1>
            <Search />
            {/* only if user logged in */}
            <div className="user-actions">
            { state?.user?.id && <Link to="/new-post"><button id="new-post-button"><Add />&nbsp;Create Post</button></Link>}
            <UserProfileMenu />
            </div>
        </header>
    )
}