import * as React from 'react'

export default function Contact() {
    return (
      <section id="contact">
        <h1>Get In Touch</h1>
        <p className="subtitle">
          Ready to start your journey? Book your free consultation session today
        </p>
  
        <div className="contact-container">
  
          {/* LEFT: FORM */}
          <div className="contact-form">
            <h2>Send us a message</h2>
  
            <form>
              <input placeholder="Your Name" />
              <input placeholder="Your Email" />
              <input placeholder="Phone Number" />
              <textarea placeholder="Tell us about your goals and experience level..." />
              <button type="submit">Book Free Session</button>
            </form>
          </div>
  
          {/* RIGHT: INFO */}
          <div className="contact-info">
            <h2>Contact Information</h2>
  
            <div className="info-item">
              <p className="label">Email</p>
              <p>info@romotion.com</p>
            </div>
  
            <div className="info-item">
              <p className="label">Phone</p>
              <p>+44 2345 6789</p>
            </div>
  
            <div className="info-item">
              <p className="label">Location</p>
              <p>London Training Centre</p>
              <p>123 Stadium Way, London, UK</p>
            </div>
  
            <div className="office-hours">
              <h3>Office Hours</h3>
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 5:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
  
        </div>
      </section>
    );
  }