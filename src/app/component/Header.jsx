import Image from 'next/image';
import styles from '../component/Header.module.css';
import NavBar from './NavBar';
import Hero from './Hero';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Image
        src="/header.png"
        alt="Cedar Lake Carpentry"
        fill
        priority
        className={styles.headerImg}
      />

      <div className={styles.overlay} />
      <div className={styles.navWrapper}>
        <NavBar />
      </div>

      <Hero />
    </header>
  );
};

export default Header;