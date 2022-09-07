import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => { 
    return (
        <nav>
            <i><span className='fa fa-tasks'></span></i>
            <ul>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
to="/favorite">Favorite</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;