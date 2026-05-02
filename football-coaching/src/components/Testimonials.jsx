import * as React from 'react'

// TODO: add player images
export default function Testimonials() {
    return (
    <section id="testimonials">
        <h1>Player Testimonials</h1>
        <p>Hear from international players who've elevated their careers with our coaching</p>
        <div className="cards">
            <div className="card">
                <p>
                  "This personalised coaching program completely transformed my game. Within a couple of months I saw massive improvements in my tactical awareness and decision making on the pitch. I can't recommend Ro-Motion more."  
                </p>
                <h3>Chloe Kelly</h3>
                <p>Arsenal and England Women's National Team</p>
            </div>
            <div className="card">
                <p>"The attention to detail in these coaching plans is insane. Every single session is tailored to your needs, physically and mentally. This has made a huge difference in my performance</p>
                <h3>Viviane Miedema</h3>
                <p>Manchester City and The Netherland's Women's National Team</p>
            </div>
            <div className="card">
                <p>"From technical skillls to professional career guidance, the comprehensive approach here helped me to secure my first professional contract. I highly recommend Ro-Motion"</p>
                <h3>Fuka Nagano</h3>
                <p>Liverpool and Japanese Women's National Team</p>
            </div>
        </div>
    </section>
    )
}