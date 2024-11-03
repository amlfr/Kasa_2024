import styles from './Tag.module.scss';

interface TagProps { 
    text : string
}

const Tag = ({ text }:TagProps) => {
    return (
        <span className={styles.tag}>
            {text}
        </span>
    );
};

export default Tag;