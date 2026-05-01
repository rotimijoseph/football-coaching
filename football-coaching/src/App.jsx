import { useState } from 'react'
import './App.css'
import * as React from 'react'
import Header from './components/Header'
import Introduction from './components/Introduction'
import TrainingPrograms from './components/TrainingPrograms'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
        <TrainingPrograms/>
      </section>
      <section id="testimonials"> 
        <Testimonials/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <section id="footer">
        <Footer/>
      </section>
    </>
  )
}

export default App
