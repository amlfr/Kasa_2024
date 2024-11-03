import { useState } from 'react';
import styles from './Dropdown.module.scss';

interface DropdownProps { 
    title: string;
    content: string | string[];
    //Probably style prop
    width?: string;
}

const Dropdown = ({title, content, width}: DropdownProps) => { 
    const [toggle, setToggle] = useState(false);
    console.log('state toggle', toggle);

    return( 
        <div style={{ width: width }} className={`${styles.dropdownWrapper} ${toggle? styles.visibleDropdownWrapper : ''}`}>
            <div className={styles.titleWrapper} onClick={() => { 
                setToggle(!toggle);
            }}>
                <span className={styles.title}>{title}</span>
                <img className={`${toggle ? styles.reverseArrow : ''}`} src="/public/dropdown-arrow.svg" />
            </div>
            <div className={`${styles.contentWrapper} ${toggle ? styles.visibleContent: ''}`}>
                {typeof content === 'string' ? (
                    <span className={`${styles.textContent} ${toggle ? styles.visibleTextContent: ''}`}>{content}</span>
                ) : (
                    content.map((item, index) => (
                        <p className={`${styles.textContentListItem} ${toggle ? styles.visibleTextContentListItem: ''}`} key={index}>{item}</p>
                    ))
                )}
            </div>
        </div>
    );
};

export default Dropdown;