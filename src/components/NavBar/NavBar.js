import styles from './NavBar.module.scss';

const NavBar = (props) => { 
    return (
        <nav>
            <i><span className='fa fa-tasks'></span></i>
            <ul>
                <li className={styles.liItem}><a href="/">Home</a></li>
                <li className={styles.liItem}><a href="/favorite">Favorite</a></li>
                <li className={styles.liItem}><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;