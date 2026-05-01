import * as React from 'react'

export default function Footer() {
    return(
        <>
        <div id="quick-links">
            <p>Quick Links</p>
            <section><a href="#training-plans">Training Programs</a></section>
            <section><a href="#testimonials">Testimonials</a></section>
            <section><a href="#contact">Contact</a></section>
        </div>
        <div id="courses">
            <p>Courses</p>
            <section><a href="#beginner">Beginner Training</a></section>
            <section><a href="#advanced">Advanced Coaching</a></section>
            <section><a href="#elite">Elite Preperation</a></section>
        </div>
        <div id="social">
          <p>Follow Us</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
          </ul>
        </div>
        </>
    )
}