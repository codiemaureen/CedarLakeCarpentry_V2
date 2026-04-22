import styles from '../component/NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navOuter}>
      <ul className={styles.NavBar}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;