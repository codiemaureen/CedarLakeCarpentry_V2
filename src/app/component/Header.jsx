import Image from 'next/image';
import styles from '../component/Header.module.css';
import NavBar from './NavBar';
import Hero from './Hero';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      {/* Background Image */}
      <Image
        src="/header.png"
        alt="Cedar Lake Carpentry"
        fill
        priority
        className={styles.headerImg}
      />

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Nav */}
      <div className={styles.navWrapper}>
        <NavBar />
      </div>

      {/* Hero Content */}
      <Hero />
    </header>
  );
};

export default Header;