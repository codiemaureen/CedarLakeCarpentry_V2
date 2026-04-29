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
        Precision Finish<br />
        Carpentry for Luxury Home<br/> 
        Builders
      </h1>

      <p className={styles.subtitle}>
        Trusted by leading Metro Detroit builders for reliable crews,<br /> 
        clean execution and consistent on-time delivery.
      </p>

      <div className={styles.buttons}>
        <a href="#contactus" className={styles.primaryBtn}>
          Request A Bid <span>→</span>
        </a>

        <a href="#services" className={styles.secondaryBtn}>
          View Services
        </a>
      </div>
      <div className={styles.proof}>
        <span>120+ Years Combined Experience</span>
        <span>Trusted by Metro Detroit Builders</span>
      </div>

    </section>
  );
};

export default Hero;