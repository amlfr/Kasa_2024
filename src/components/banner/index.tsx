import styles from './Banner.module.scss';

const Banner = ({ 
    backgroundSrc, displayText = false
}: { 
    backgroundSrc: string
    displayText?: boolean
}) => {
    return (
        <div className={styles.banner}>
            <img src={backgroundSrc} className={styles.backgroundImg}></img>
            {displayText &&(
                <p className={styles.text}>Chez vous, partout et ailleurs</p>
            )}
        </div>
    );
};

export default Banner;