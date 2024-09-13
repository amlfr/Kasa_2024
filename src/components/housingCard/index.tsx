import styles from './HousingCard.module.scss';
import { Housing } from '../../types/types';
import { Link } from 'react-router-dom';

interface HousingCardProps { 
    housingData: Housing;
}

const HousingCard = ({housingData}: HousingCardProps) => {
    return (
        <Link to={`/housing/${housingData.id}`} className={styles.card}>
            <img className={styles.backgroundImg} src={housingData.cover} />
            <p className={styles.title} style={{textDecoration: 'none'}}>{housingData.title}</p>
        </Link>
    );
};

export default HousingCard;
