import Image from "next/image";
import styles from "./AboutUs.module.css";
import { Check, Users, Hammer } from "lucide-react";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.divider}>
            <span></span>
              <span className={styles.tree}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 2
                      L14.5 6.5 H13
                      L16.5 11 H14
                      L18.5 16 H5.5
                      L10 11 H8
                      L11.5 6.5 H9.5
                      Z"
                    fill="#b89563"
                  />
                </svg>
              </span>
            <span></span>
          </div>

          <h2>About Cedar Lake Carpentry</h2>

          <p>
            Cedar Lake Finish Carpentry partners with builders across Metro
            Detroit to deliver high-quality residential finish work—on schedule,
            on spec, and without the headaches.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <Check className={styles.iconSvg} size={34} strokeWidth={2} />
              </div>
              <div>
                <h3>Experienced. Trusted. Proven.</h3>
                <p>
                  With over 120 years of combined experience, our team has
                  supported both production and custom home builders, including
                  Robertson Brothers Homes, Pulte Homes, Toll Brothers, MGM
                  Homes, and Saske Construction.
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <Users className={styles.iconSvg} size={34} strokeWidth={2} />
              </div>
              <div>
                <h3>Built for Builders.</h3>
                <p>
                  Builders choose Cedar Lake because we’re consistent, reliable,
                  and easy to work with. We show up prepared, communicate
                  clearly, and execute clean, detailed work.
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.icon}>
                <Hammer className={styles.iconSvg} size={34} strokeWidth={2} />
              </div>
              <div>
                <h3>Details That Define Quality.</h3>
                <p>
                  From trim and molding to cabinetry, built-ins, and custom
                  features, our focus is simple—deliver results you don’t have
                  to think twice about.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.imageWrap}>
            <Image
              src="/shelves.jpg"
              alt="High-end finish carpentry living space"
              fill
              className={styles.aboutImage}
            />
          </div>
        </div>

        <div className={styles.ctaBar}>
          <div className={styles.ctaIcon}>⚒</div>

          <div className={styles.ctaText}>
            <h3>Have an upcoming project or need additional support?</h3>
            <p>
              If you’re looking for a finish carpentry crew that can step in,
              stay on schedule, and represent your build with professionalism,
              we’re ready to help.
            </p>
          </div>

          <div className={styles.ctaButtons}>
            <a href="tel:15863225234" className={styles.primaryBtn}>
              Call Now
            </a>

            <a href="sms:15863225234" className={styles.secondaryBtn}>
              Text Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}