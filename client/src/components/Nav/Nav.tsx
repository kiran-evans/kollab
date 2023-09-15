import './Nav.css';
import Search from '../Search/Search';
import UserProfile from '../UserProfile/UserProfile';

import { Link, NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header>
        <div className="head-right">
            <h1>
                <Link to='/'>
                    Collab-rate
                </Link>
            </h1>
            <nav>
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/comments'>
                    Comments
                    {/* Move to userprofile dropdown menu */}
                </NavLink>
                <NavLink to='/posts/userid'>
                    Saved
                </NavLink>
                <NavLink to='/posts/userid'>
                    My Posts
                    {/* Move to userprofile dropdown menu */}
                </NavLink>
            </nav>
        </div>
        <div className="head-left">
            <Search />
            <p>Theme</p>
            <UserProfile />
        </div>
    </header>
  )
}

export default Nav