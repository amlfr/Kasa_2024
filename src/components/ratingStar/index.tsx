import styles from './StarRating.module.scss';

interface StarRatingProps { 
    rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
    return( 
        <div className={styles.starRatingContainer}>
            <img className={styles.star} src={rating > 0 ? "/public/star.svg" : "/public/star-inactive.svg"} />
            <img className={styles.star} src={rating > 1 ? "/public/star.svg" : "/public/star-inactive.svg"} />
            <img className={styles.star} src={rating > 2 ? "/public/star.svg" : "/public/star-inactive.svg"} />
            <img className={styles.star} src={rating > 3 ? "/public/star.svg" : "/public/star-inactive.svg"} />
            <img className={styles.star} src={rating > 4 ? "/public/star.svg" : "/public/star-inactive.svg"} />
        </div>
    );
};

export default StarRating;