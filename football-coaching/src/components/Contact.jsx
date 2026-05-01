import * as React from 'react'

export default function Contact() {
    return (
        <>
        <h1>Contact Us</h1>

        <h2>Send us a message</h2>
        <form>
            <input name="Name" placeholder="Name"/>
            <input name="Email" placeholder="Email"/>
            <input name="Phone Number" placeholder="Phone Number"/>
            <input name="Message" placeholder="Message (include goals and experience level)"/>
            <button type="submit">Submit</button>
        </form>

        <h2>Contact Information</h2>
        <p>Email</p>
        <p>Phone</p>
        <p>Location</p>
        <p>Office Hours</p>
        </>
    )
}