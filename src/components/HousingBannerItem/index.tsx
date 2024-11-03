import styles from './HousingBannerItem.module.scss';

interface HousingBannerItemProps { 
    imageSource: string;
}

const HousingBannerItem = ({ imageSource }: HousingBannerItemProps) => {
    return ( 
        <img className={styles.image} src={imageSource} /> 
    );
};

export default HousingBannerItem;