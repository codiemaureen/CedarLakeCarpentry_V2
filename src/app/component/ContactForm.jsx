import style from '../component/ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={style.contactFormContainer}>
      <form action="" className={style.ContactForm}>
        <div className={style.inputContainer}>
          <label htmlFor='email'>Enter your Email:</label>
          <input type='text' 
          className={style.inputBox}placeholder='Enter your email....'/>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor='subject'>Enter your Subject:</label>
          <input type='text'
          className={style.inputBox} placeholder='Enter Your subject'/>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor='message'>Enter Message:</label>
          <textarea 
          className={style.inputBox}placeholder='enter your message'></textarea>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
