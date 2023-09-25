import { Add } from '@mui/icons-material';
import './Header.css';
import Search from './Search/Search';
import { UserProfileMenu } from './UserProfileMenu/UserProfileMenu';

import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <h1>
                <Link to='/'>
                    Collab-Rate
                </Link>
            </h1>
            <Search />
            <Link to="/new-post"><button id="new-post-button"><Add />&nbsp;Create Post</button></Link>
            <UserProfileMenu />
        </header>
    )
}