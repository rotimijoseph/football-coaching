import * as React from 'react'
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Header() {
    return (
        <nav>
            <h1>Elite Football Coaching</h1>
            <div>
                <section><a href="#training-plans">Training Programs</a></section>
                <section><a href="#testimonials">Testimonials</a></section>
                <section><a href="#contact">Contact</a></section>
                <section><a>Book Free Session</a></section>
            </div>
        </nav>
    )
}
