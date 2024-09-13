import styles from './Header.module.scss';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className={styles.header}>
            <img src="../../../public/LOGO.png" className={styles.logo}></img>
            <nav> 
                <ul className={styles.linkList}>
                    <Link to={"/"} className={styles.linkItem}>Accueil</Link>
                    <Link to={"/about"}className={styles.linkItem}>A propos</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;