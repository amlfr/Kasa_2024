import Banner from "../../components/banner";
import Dropdown from "../../components/dropdown";
import styles from "./About.module.scss";
import { useMemo } from "react";

const AboutPage = () => { 

    const dropdownWidth = useMemo(() => {
        return window.innerWidth <= 768 ? '89vw' : '80vw';
    }, []);


    return (
        <main className={styles.main}>
            <Banner backgroundSrc="../../public/banner-bg-about.png"  />
            <div className={styles.dropdownContainer}> 
                <Dropdown width={dropdownWidth} title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiés par nos équipes." />
                <Dropdown width={dropdownWidth}title="Respect" content="La bienveillance fait partie des valeurs fondactrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Dropdown width={dropdownWidth} title="Service" content="La qualité du service est au coeur de notre engagement chew Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hotes ou nos locataire, soit empreinte de respect de bienveillance." />
                <Dropdown width={dropdownWidth} title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond uaux criteres de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cale permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes." />
            </div>
        </main>
    );
};
 
export default AboutPage;