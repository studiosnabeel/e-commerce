import React from 'react';

const Contact = () => (
  <>
    <h3 className="contact-h3">Contact Page</h3>
    <iframe
      title="Liberty Market"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5088702616235!2d74.34456025!3d31.510180849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919045af8941833%3A0xd6b95f4f17c66a16!2sLiberty%20Market%20Gulberg%20III%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1674453429793!5m2!1sen!2s"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowfullscreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
    <div className="contact-box">
      <form
        className="contact-form"
        action="https://formspree.io/f/xpzewnjn"
        method="POST"
      >
        <input
          className="contact-input"
          type="text"
          placeholder="username"
          name="username"
          required
          autoComplete="off"
        />

        <input
          className="contact-input"
          type="email"
          name="Email"
          placeholder="Enter Email"
          autoComplete="off"
          required
        />

        <textarea
          name="message"
          placeholder="Enter your message here..."
          id=""
          cols="30"
          rows="8"
          required
          autoComplete="off"
        />

        <input className="hero-btn" type="submit" value="submit" />
      </form>
    </div>
  </>
);

export default Contact;
