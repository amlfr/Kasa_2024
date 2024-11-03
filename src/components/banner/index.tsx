import styles from './Banner.module.scss';

const Banner = ({ 
    backgroundSrc, displayText = false, largeBanner = false
}: { 
    backgroundSrc: string
    displayText?: boolean
    largeBanner?: boolean 
}) => {
    return (
        <div className={`${styles.banner} ${largeBanner? styles.largeBanner : ''}`}>
            <img src={backgroundSrc} className={styles.backgroundImg}></img>
            {displayText &&(
                <p className={styles.text}>Chez vous, partout et ailleurs</p>
            )}
        </div>
    );
};

export default Banner;