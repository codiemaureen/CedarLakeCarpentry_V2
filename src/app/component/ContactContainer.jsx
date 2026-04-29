import style from "../component/ContactContainer.module.css";
import ContactForm from "./ContactForm";

const ContactContainer = () => {
  return (
    <section className={style.contactContainer}>
      <div className={style.contactIntro}>
        <p className={style.eyebrow}>Contact</p>

        <h2 className={style.contactHeader}>
          Let’s Build Your Next Project
        </h2>

        <p className={style.trustLine}>
          Trusted by builders across Metro Detroit.
        </p>

        <p className={style.contactLead}>
          Cedar Lake Carpentry works with builders and homeowners across Metro
          Detroit to deliver high-end finish carpentry, detailed millwork, and
          dependable execution.
        </p>
      </div>

      <div className={style.contactWrapper}>
        <div className={style.infoPanel}>
          <div className={style.serviceArea}>
            <p className={style.panelEyebrow}>Serving Metro Detroit</p>
            <p>
              We proudly support projects throughout Metro Detroit and
              surrounding areas with craftsmanship, professionalism, and clear
              communication.
            </p>
          </div>

          <div className={style.trustBlock}>
            <h3>Why Builders Trust Cedar Lake</h3>

            <ul>
              <li>120+ Years Combined Experience</li>
              <li>Trusted by Builders Across Metro Detroit</li>
              <li>Reliable Scheduling & Clear Communication</li>
              <li>High-End Finish Work & Detail Precision</li>
            </ul>

            <p>
              Built for production schedules, custom homes, and detail-driven
              finish work.
            </p>
          </div>

          <div className={style.contactRows}>
            <div>
              <span>Call Us</span>
              <a href="tel:15863225234">(586) 322-5234</a>
            </div>

            <div>
              <span>Email</span>
              <a href="mailto:cedarlakecarpentry@gmail.com">
                cedarlakecarpentry@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className={style.formPanel}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;