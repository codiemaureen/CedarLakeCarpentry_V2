import style from '../component/ContactContainer.module.css';
import ContactForm from './ContactForm';

const ContactContainer = () => {
  return (
    <div className={style.contactContainer}>
      <p>Contact Container</p>
    <div className={style.contactWrapper}>
        <ContactForm />
        <div className={style.contactDetails}>
          <a href=''>586.322.5234</a>
          <a href=''>Cedarlakecarpentry@gmail.com</a>
        </div>
    </div>
    </div>
  )
}

export default ContactContainer
