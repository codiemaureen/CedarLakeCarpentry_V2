import styles from '../component/Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <p className={styles.kicker}>Cedar Lake Carpentry</p>

      <h1 className={styles.title}>
        Luxury Finish Carpentry, Built to Impress
      </h1>

      <p className={styles.subtitle}>
        Custom trim, detailed millwork, and refined interior finishes
        across Metro Detroit.
      </p>

      <div className={styles.buttons}>
        <a href="#contactus" className={styles.primaryBtn}>
          Request a Quote
        </a>
        <a href="#services" className={styles.secondaryBtn}>
          View Services
        </a>
      </div>
    </div>
  );
};

export default Hero;