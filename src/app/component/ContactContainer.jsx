import style from '../component/ContactContainer.module.css';
import ContactForm from './ContactForm';

const ContactContainer = () => {
  return (
    <div className={style.contactContainer}>
      <p>Contact Container</p>
      <ContactForm />
    </div>
  )
}

export default ContactContainer
