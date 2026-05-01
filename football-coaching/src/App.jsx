import { useState } from 'react'
import './App.css'
import * as React from 'react'
import Header from './components/Header'
import Introduction from './components/Introduction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <section id="header"> 
       <Header/>
      </section>

      <section id="introduction"> 
        <Introduction/>
      </section>


      <section id="training-programs">
        <p>Training Programs</p>
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
