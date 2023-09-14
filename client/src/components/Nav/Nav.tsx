import './Nav.css';
import Search from '../Search/Search';
import UserProfile from '../UserProfile/UserProfile';

function Nav() {
  return (
    <header>
        <div className="head-right">
            <h1>
                <a href='/home'>
                    Collab-rate
                </a>
            </h1>
            <nav>
                <a href='home'>
                    Home
                </a>
                <a href='main'>
                    Main
                </a>
                <a href='about'>
                    About
                </a>
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