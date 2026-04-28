import styles from '../component/Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <p className={styles.kicker}>Cedar Lake Carpentry</p>

      <h1 className={styles.title}>
        High-End Finish Carpentry for Metro Detroit Builders & Luxury Homes
      </h1>

      <p className={styles.subtitle}>
        Custom trim, detailed millwork, cabinet installation, mantels, and refined interior finishes built with precision.
      </p>

      <div className={styles.buttons}>
        <a href="#contactus" className={styles.primaryBtn}>
          Work With Us
        </a>
        <a href="#services" className={styles.secondaryBtn}>
          View Services
        </a>
      </div>
    </div>
  );
};

export default Hero;