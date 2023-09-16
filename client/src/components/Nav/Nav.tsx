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
                </NavLink>
                <NavLink to='/posts/userid'>
                    Saved
                </NavLink>
            </nav>
        </div>
        <div className="head-left">
            <Search />
            <div className="theme-mode">
                <p>Theme</p>
            </div>
            <UserProfile />
        </div>
    </header>
  )
}

export default Nav