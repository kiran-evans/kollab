import { Add } from '@mui/icons-material';
import './Header.css';
// import { SearchBox } from './Search/Search';
import { UserProfileMenu } from './UserProfileMenu/UserProfileMenu';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../lib/ContextProvider';

export const Header = () => {
    const { state } = useContext(AppContext);
    return (
        <header>
            <div id="headerInner">
                <h1>
                    <Link to='/'>
                        Kollab
                    </Link>
                </h1>
                {/* <SearchBox /> */}
                {/* only if user logged in */}
                <div className="user-actions">
                    { state?.user?.id && <Link to="/new-post"><button id="new-post-button"><Add />&nbsp;Create Post</button></Link>}
                <UserProfileMenu />
                </div>
            </div>
        </header>
    )
}