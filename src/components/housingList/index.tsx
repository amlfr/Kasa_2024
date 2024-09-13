import styles from './HousingList.module.scss';
import HousingCard from '../housingCard';
import { Housing } from '../../types/types';

interface HousingsListProps  { 
    housingsData: Housing[];
}

const HousingsList = ({ housingsData }: HousingsListProps) => {
    return (
        <div className={styles.housingList}>
            {housingsData.map((housing, index) => { 
                return <HousingCard housingData={housing} key={index} />;
            })}
        </div>
    );
};

export default HousingsList;
