import React, { useState } from 'react';
import socialLinks, { contactInfo } from '../data/contactData.js';

const SCRIPT_URL =
  import.meta.env.VITE_CONTACT_SCRIPT_URL?.trim() ||
  'https://script.google.com/macros/s/AKfycbzs4s-mGbYyFh7MkqVzJOnp65n4P91r3MoMthoE1Y32Li0qJPe-lLUZNJUbTnfEziUf/exec';

function Contact() {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setMessage('');
    setIsSubmitting(true);

    try {
      const formData = new FormData(form);
      formData.append('userAgent', navigator.userAgent);
      formData.append('pageUrl', window.location.href);

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const result = await response.json().catch(() => null);
      if (result && result.ok === false) {
        throw new Error(result.error || 'Submission failed.');
      }

      setMessage('Successfully submitted!');
      form.reset();
      setTimeout(() => setMessage(''), 5000);
    } catch (error) {
      setMessage(error?.message || 'Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h3 className="sub-title">Contact Me</h3>
            <p>
              <i className="fa-solid fa-paper-plane" />
              {contactInfo.email}
            </p>
            <p>
              <i className="fa-solid fa-phone" />
              {contactInfo.phone}
            </p>
            <div className="social-icons">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  aria-label={link.label}
                  className="social-link"
                  data-label={link.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={link.iconClass} />
                </a>
              ))}
            </div>
            <a href={contactInfo.cvPath} download className="btn btn2">
              Download CV
            </a>
          </div>
          <div className="contact-right">
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Your name" required />
              <input type="email" name="Email" placeholder="Your email" required />
              <textarea name="Message" rows="10" placeholder="Your message" />
              <button type="submit" className="btn btn2" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            <span id="msg">{message}</span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>copyright &#169; Sunil. Engineered by SunilKharsu</p>
      </div>
    </div>
  );
}

export default Contact;
