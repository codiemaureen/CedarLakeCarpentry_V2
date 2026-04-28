import styles from "../component/Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.brandBlock}>
        <div className={styles.treeMark}>
          <div className={styles.treeMark}>
          <Image
            src="/tree-line.png"
            alt=""
            width={210}
            height={110}
            priority
          />
        </div>
        </div>

        <div className={styles.brandRow}>
          <span />
          <p>Cedar Lake Carpentry</p>
          <span />
        </div>

        <div className={styles.shortLine} />
      </div>

      <h1 className={styles.title}>
        High-End Finish Carpentry for Metro Detroit Builders & Luxury Homes
      </h1>

      <p className={styles.subtitle}>
        Custom trim, detailed millwork, cabinet installation, mantels, and
        refined interior finishes built with precision.
      </p>

      <div className={styles.buttons}>
        <a href="#contactus" className={styles.primaryBtn}>
          Work With Us <span>→</span>
        </a>

        <a href="#services" className={styles.secondaryBtn}>
          View Services
        </a>
      </div>
    </section>
  );
};

export default Hero;