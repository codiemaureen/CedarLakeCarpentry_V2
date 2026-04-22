import style from '../component/ContactContainer.module.css';
import ContactForm from './ContactForm';
import Image from 'next/image';

const ContactContainer = () => {
  return (
    <div className={style.contactContainer}>
      <h2 className='contactHeader'>Contact Us</h2>
    <div className={style.contactWrapper}>
        <ContactForm />
        <div className={style.contactDetails}>
          <h3>Proudly Serving Metro Detroit!</h3>
          <Image src='/map.png' alt="map" className={style.map} width={400} height={400}/>
        

          <a href="tel:15863225234" className={style.ctaBtnPrimary}>
            Call Now
          </a>


        <p className={style.contactNote}>
          Cedarlakecarpentry@gmail.com
        </p></div>
    </div>
    </div>
  )
}

export default ContactContainer
