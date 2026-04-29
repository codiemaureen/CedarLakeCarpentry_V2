"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setResult("");

    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
    formData.append("subject", "New Cedar Lake Project Inquiry");
    formData.append("from_name", "Cedar Lake Carpentry Website");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you. Your project inquiry has been sent.");
      event.target.reset();
    } else {
      console.error(data);
      setResult("Something went wrong. Please call or email us directly.");
    }

    setIsSending(false);
  };

  return (
    <section className={styles.contactSection} id="contactus">
      <div className={styles.contactCard}>
        <p className={styles.kicker}>Project Inquiry</p>
        <h2 className={styles.heading}>Request a Project Estimate</h2>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.hidden} aria-hidden="true">
            <label>
              Do not fill this out
              <input type="text" name="botcheck" tabIndex="-1" autoComplete="off" />
            </label>
          </div>

          <div className={styles.fieldGroup}>
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label>
              Company
              <input type="text" name="company" placeholder="Company name" />
            </label>
          </div>

          <div className={styles.fieldGroup}>
            <label>
              Phone or Email
              <input type="text" name="contact" placeholder="Best way to reach you" required />
            </label>

            <label>
              Project Location
              <input type="text" name="project_location" placeholder="City / community" />
            </label>
          </div>

          <div className={styles.fieldGroup}>
            <label>
              Project Type
              <select name="project_type" required defaultValue="">
                <option value="" disabled>Select one</option>
                <option value="Interior Trim">Interior Trim</option>
                <option value="Cabinet Installation">Cabinet Installation</option>
                <option value="Coffered Ceilings">Coffered Ceilings</option>
                <option value="Fireplace Mantels">Fireplace Mantels</option>
                <option value="Stair Railings">Stair Railings</option>
                <option value="Custom Built-Ins">Custom Built-Ins</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label>
              Timeline
              <select name="timeline" defaultValue="">
                <option value="" disabled>Select one</option>
                <option value="ASAP">ASAP</option>
                <option value="Next 2-4 weeks">Next 2–4 weeks</option>
                <option value="Next 1-3 months">Next 1–3 months</option>
                <option value="Planning ahead">Planning ahead</option>
              </select>
            </label>
          </div>

          <label className={styles.fullWidth}>
            Project Details
            <textarea
              name="message"
              placeholder="Tell us about the project, scope, timeline, or details."
              required
            />
          </label>

          <button type="submit" className={styles.button} disabled={isSending}>
            {isSending ? "Sending..." : "Request Estimate"}
          </button>

          <p className={styles.responseNote}>We typically respond within 24 hours.</p>
          {result && <p className={styles.formStatus}>{result}</p>}
        </form>
      </div>
    </section>
  );
}