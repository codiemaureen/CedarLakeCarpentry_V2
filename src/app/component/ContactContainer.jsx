import style from '../component/ContactContainer.module.css';
import ContactForm from './ContactForm';
import Image from 'next/image';

const ContactContainer = () => {
  return (
    <section className={style.contactContainer}>
      <div className={style.contactIntro}>
        <p className={style.eyebrow}>Contact</p>
        <h2 className={style.contactHeader}>Let’s Talk About Your Next Project</h2>
        <p className={style.contactLead}>
          Cedar Lake Carpentry works with builders and homeowners across Metro Detroit
          to deliver high-end finish carpentry, detailed millwork, and dependable execution.
        </p>
      </div>

      <div className={style.contactWrapper}>
        <div className={style.contactContent}>
          <div className={style.detailCard}>
            <h3>Serving Metro Detroit</h3>
            <p>
              We proudly support projects throughout Metro Detroit and surrounding areas
              with craftsmanship, professionalism, and clear communication.
            </p>
          </div>
          <div className={style.mapWrap}>
          <Image src='/map.png' alt='Service area map' className={style.map} width={500} height={280} />
</div>

          <div className={style.detailCard}>
            <h3>Call Us</h3>
            <a href="tel:15863225234" className={style.contactLink}>
              (586) 322-5234
            </a>
          </div>

          <div className={style.detailCard}>
            <h3>Email</h3>
            <a
              href="mailto:cedarlakecarpentry@gmail.com"
              className={style.contactLink}
            >
              cedarlakecarpentry@gmail.com
            </a>
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