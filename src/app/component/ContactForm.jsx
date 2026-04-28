"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY
    );


    formData.append("subject", "New Cedar Lake Inquiry");
    formData.append("from_name", "Cedar Lake Website");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully");
      event.target.reset();
    } else {
      console.error(data);
      setResult("Something went wrong");
    }
  };

  return (
    <section className={styles.contactSection} id="contactus">
      <div className={styles.contactCard}>
        <h2 className={styles.heading}>Send us a message</h2>

        <form className={styles.form} onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className={styles.input}
            required
          />

          <input
            type="text"
            name="contact"
            placeholder="Phone or email"
            className={styles.input}
            required
          />

          <textarea
            name="message"
            placeholder="Let us know how we can help"
            className={styles.textarea}
            required
          />

          <input type="checkbox" name="botcheck" className={styles.hidden} style={{ display: "none" }} />

          <button type="submit" className={styles.button}>
            Submit Inquiry
          </button>

          {result && <p className={styles.formStatus}>{result}</p>}
        </form>
      </div>
    </section>
  );
}