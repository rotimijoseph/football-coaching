import * as React from 'react'

export default function TrainingPrograms() {
    return (
      <section id="training-programs">
        <h1>Training Programs</h1>
  
        <div className="cards">
          
          <div className="card">
            <h2>Beginner Foundations</h2>
            <p>Master the fundamentals of football with professional guidance</p>
            <h3>£99 <span>/ 8 weeks</span></h3>
            <ul>
              <li>Basic ball control and dribbling</li>
              <li>Passing and receiving techniques</li>
              <li>Positioning and movement</li>
            </ul>
            <button>Get Started</button>
          </div>
  
          <div className="card featured">
            <span className="badge">Most Popular</span>
            <h2>Advanced Performance</h2>
            <p>Take your skills to the next level with intensive training</p>
            <h3>£199 <span>/ 12 weeks</span></h3>
            <ul>
              <li>Advanced tactical understanding</li>
              <li>Speed and agility training</li>
              <li>Mental conditioning</li>
            </ul>
            <button>Get Started</button>
          </div>
  
          <div className="card">
            <h2>Elite Pro Prep</h2>
            <p>Professional-level training for aspiring elite players</p>
            <h3>£349 <span>/ 16 weeks</span></h3>
            <ul>
              <li>Match day preparation</li>
              <li>Career pathway planning</li>
              <li>Tournament participation</li>
            </ul>
            <button>Get Started</button>
          </div>
  
        </div>
      </section>
    );
  }