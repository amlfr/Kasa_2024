import { useState } from 'react';
import styles from './HousingBanner.module.scss';
import HousingBannerItem from '../HousingBannerItem';

interface HousingBannerProps { 
    pictures: string[]
}

const HousingBanner = ({ pictures }: HousingBannerProps) => { 
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log('currentIndex', currentIndex);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };
  
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };
  
    return (
        <div className={styles.carouselContainer}>
            {pictures.length > 1 && (
                <button onClick={goToPrevious} className={`${styles.leftButton} ${styles.button}`}>
                    <img className={styles.arrowSvg} src='/public/banner-arrow.svg' />
                </button>
            )}
            <div 
                className={styles.imageWrapper}   
               
            >
                <div  style={{ transform: `translateX(-${currentIndex * 100}%)`, height: '100%', display: 'flex', flexShrink: 0}}> {pictures.map((picture, index) => { 
                    return(
                        <HousingBannerItem imageSource={picture} key={index} />
                    );
                })}
                </div>
                {pictures.length > 1 && (
                    <span className={styles.text}>{`${currentIndex + 1} / ${pictures.length}`}</span>
                )}
            </div>
            {pictures.length > 1 && (
                <button onClick={goToNext} className={`${styles.rightButton} ${styles.button}`}>
                    <img className={styles.arrowSvg} src='/public/banner-arrow.svg' />
                </button>
            )}
        </div>
    );
};

export default HousingBanner;