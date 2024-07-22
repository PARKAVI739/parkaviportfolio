// app/contact/page.js
"use client"

import React from 'react';

export default function Contact() {
  return (
    <div className="contact-container">
      <section id="contact">
        <div className="contact-header">
          <h2>Contact Me</h2>
          <p>I’d love to hear from you! Whether you have a question or just want to connect, feel free to reach out.</p>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Phone</h3>
            <p><a href="tel:+19585748384">9585748384</a></p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p><a href="mailto:parkavimuthukrishnan@gmail.com">parkavimuthukrishnan@gmail.com</a></p>
          </div>
          <div className="contact-item">
            <h3>LinkedIn</h3>
            <p><a href="https://www.linkedin.com/in/parkavi-muthukrishnan-856025182/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
          </div>
          <div className="contact-item">
            <h3>GitHub</h3>
            <p><a href="https://github.com/PARKAVI739" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
          </div>
        </div>
        <div className="contact-form">
          <h3>Send Me a Message</h3>
          <form action="mailto:parkavimuthukrishnan@gmail.com" method="post" encType="text/plain">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" />
            
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
            
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
