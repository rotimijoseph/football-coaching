import { useState } from 'react'
import './App.css'
import * as React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <section id="header"> 
       <p>Header</p>
      </section>

      <section id="introduction"> 
       <p>Introduction</p>
      </section>


      <section id="training-plans">
        <p>Training Plan</p>
      </section>

      <section id="testimonials"> 
        <p>Testimonials </p>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <section id="contact">
        <div id="social">
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
      </section>

      <section id="footer"></section>
    </>
  )
}

export default App
