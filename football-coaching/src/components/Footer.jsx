import * as React from 'react'

export default function Footer() {
  return (
    <footer id="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Ro-Motion Elite Football Coaching</h2>
          <p>
            Professional football coaching for players at all levels, from beginners to elite athletes.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <a href="#training-programs">Training Programs</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h3>Programs</h3>
          <a href="#beginner">Beginner Training</a>
          <a href="#advanced">Advanced Coaching</a>
          <a href="#elite">Elite Preparation</a>
        </div>

        <div>
          <h3>Follow Us</h3>
          <div className="socials">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Ro-MotionElite Football Coaching. All rights reserved.
      </div>

    </footer>
  );
}