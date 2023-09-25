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
        <UserProfileMenu />
    </header>
  )
}