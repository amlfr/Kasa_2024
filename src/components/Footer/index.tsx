import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
         <img src="../../../public/LOGO-BW.png"></img>
         <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;