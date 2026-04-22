import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <section className={styles.contactSection} id="contactus">
      <div className={styles.contactCard}>
        <h2 className={styles.heading}>Send us a message</h2>

        <form className={styles.form}>
          <input
            type="text"
            placeholder="Your name"
            className={styles.input}
          />

          <input
            type="text"
            placeholder="Phone or email"
            className={styles.input}
          />

          <textarea
            placeholder="Tell us what furniture you’re looking for"
            className={styles.textarea}
          />

          <button type="submit" className={styles.button}>
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}