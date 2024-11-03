import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import styles from './Layout.module.scss';

const LayoutPage = () => {
    const location = useLocation();
    let gapClass='';
    if (location.pathname === '/') gapClass = styles.defaultGap;
    else if (location.pathname === '/about') gapClass = styles.smallGap;
    else if (location.pathname === '/') gapClass = styles.largeGap;
    else gapClass = styles.defaultGap;

    return (
        <div className={`${styles.layout} ${gapClass}`}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );    
};
 
export default LayoutPage;