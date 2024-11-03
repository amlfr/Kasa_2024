import { Housing } from "../../types/types";
import { useLoaderData } from "react-router-dom";
import Tag from "../../components/Tag";
import Dropdown from "../../components/dropdown";
import styles from './HouseDescription.module.scss';
import StarRating from "../../components/ratingStar";
import HousingBanner from "../../components/housingBanner";
import { useMemo } from "react";


const HouseDescriptionPage = () => { 
    const  housingData = useLoaderData() as Housing;
    const splitName = housingData.host.name.split(/\s+/);
    const firstName = splitName[0];
    const lastName = splitName[1];

    const dropdownWidth = useMemo(() => {
        return window.innerWidth <= 768 ? '90vw' : '40vw';
    }, []);

    return (
        <main className={styles.houseDescriptionContainer}>
            <HousingBanner pictures={housingData.pictures} />
            <div className={styles.infoContainer}> 
                <div className={styles.leftInfoContainer}>
                    <div>
                        <h1 className={styles.title}>{housingData.title}</h1>
                        <p className={styles.location}>{housingData.location}</p>
                    </div>
                    <div className={styles.tagContainer}>
                        {housingData.tags.map((value, index) => {
                            return(
                                <Tag text={value} key={index} />
                            );
                        })}
                    </div>
                </div>
                <div className={styles.rightInfoContainer}>
                    <div className={styles.hostInfoContainer}>
                        <div className={styles.nameContainer}>
                            <p className={styles.hostName}>{firstName}</p>
                            <p className={styles.hostName}>{lastName}</p>
                        </div>
                        <img className={styles.hostPicture} src={housingData.host.picture} />
                    </div>
                    <StarRating rating={parseInt(housingData.rating)} />
                </div>
            </div>
            <div className={styles.dropdownContainer}>
                <Dropdown width={dropdownWidth} title="Description"  content={housingData.description}/>
                <Dropdown width={dropdownWidth} title="Equipements" content={housingData.equipments} />
            </div>
        </main>);
};
 
export default HouseDescriptionPage;