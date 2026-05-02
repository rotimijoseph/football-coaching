import * as React from 'react'

export default function Introduction() {
    return (
      <div className="intro">
        <h1>
          Elevate Your Game <br />
          to a Professional Level
        </h1>
  
        <p>
          Transform your football skills with personalised coaching from experienced professionals.
          Join hundreds of players who've reached their potential.
        </p>
  
        <div className="intro-button-group">
          <a href="#contact" className="intro-button primary">
            Book Your Free Session
          </a>
          <a href="#training-programs" className="intro-button secondary">
            View Courses
          </a>
        </div>
      </div>
    );
  }