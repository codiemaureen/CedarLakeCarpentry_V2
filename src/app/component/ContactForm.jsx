import style from '../component/ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={style.contactFormContainer}>
      <form action="">
        <div className={style.emailInput}>
          <label htmlFor='email'>Email</label>
          <input type='text' placeholder='Enter your email....'/>
        </div>
        <div className={style.subjectInput}>
          <label htmlFor='subject'>Enter your Subject</label>
          <input type='text' placeholder='Enter Your subject'/>
        </div>
        <div className={style.messageInput}>
          <label htmlFor='message'>Enter Message</label>
          <textarea placeholder='enter your message'></textarea>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
