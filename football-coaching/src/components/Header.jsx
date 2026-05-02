import * as React from 'react'

export default function Header() {
    return (
      <nav id="nav">
        <h2 className="logo">Elite Football Coaching</h2>
  
        <ul className="nav-links">
          <li><a href="#training-programs">Training Programs</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a className="cta" href="#contact">Book Free Session</a></li>
        </ul>
      </nav>
    );
  }