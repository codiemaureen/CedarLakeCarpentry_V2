import Image from 'next/image';
import style from '../component/Header.module.css';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className={style.headerContainer}>
      <Image
        src="/header.png"
        alt="Cedar Lake Carpentry"
        fill
        priority
        className={style.headerImg}
      />

      <div className={style.navWrapper}>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;