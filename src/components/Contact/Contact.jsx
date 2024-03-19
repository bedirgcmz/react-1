import styles from "./Contact.module.css";

const ContactPage = ({ pageTitle }) => {
  return (
    <form className={styles.contactForm}>
      <h2>{pageTitle}</h2>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactPage;
