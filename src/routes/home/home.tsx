import Banner from "../../components/banner";
import HousingsList from "../../components/housingList";
import { useLoaderData } from "react-router-dom";
import { Housing } from '../../types/types';
import styles from './Home.module.scss';

const HomePage = () => {
    const  housingsData = useLoaderData() as Housing[] ;

    return ( 
        <main className={styles.homeContainer}>
            <Banner backgroundSrc="../../public/banner-bg-home.png" displayText />
            <HousingsList housingsData={housingsData} />
        </main>
    );
};


export default HomePage;