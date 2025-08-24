import './contact.css'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Message from '../Message';

const Contact = () => {
    const [message, setMessage] = useState("Send Message");
    const [status, setStatus] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [color, setColor] = useState("");
    const name = useRef();
    const email = useRef();
    const textarea = useRef();
    const form = useRef();

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    const sendEmail = (e) => {
        e.preventDefault();

        if (!isValidEmail(email.current.value)) {
            setColor("red");
            setStatus("Invalid Email Address!");
            setIsSending(false);
            setTimeout(() => {
                setStatus("");
            }, 4000);
            return;
        }

        setIsSending(true);
        setMessage("Sending...");

        emailjs
            .sendForm('service_zn329qh', 'template_k5wg5fi', form.current, {
                publicKey: 'NYYOs33kaVDc3r0sX',
            })
            .then(
                () => {
                    setMessage("Send Message");
                    setIsSending(false);
                    setColor("green");
                    setStatus("Message sent!");
                    setTimeout(() => setStatus(""), 4000);
                    name.current.value = "";
                    email.current.value = "";
                    textarea.current.value = "";
                },
                (error) => {
                    setMessage("Send Message");
                    setColor("red");
                    setStatus("FAILED...");
                    setIsSending(false);
                    setTimeout(() => setStatus(""), 4000);
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div id='contact' className='contact-container section'>
            <div className="contact-head">
                <p>Get In Touch</p>
                <h1>Contact <span className='lastname'>Me</span></h1>
            </div>
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <div className="contact-box">
                        <i className="fa-regular fa-envelope"></i>
                        <div className="box-info">
                            <h4>Email</h4>
                            <p>shivamprakash303@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-box">
                        <i className="fa-solid fa-phone"></i>
                        <div className="box-info">
                            <h4>Phone</h4>
                            <p>+91 9910899298</p>
                        </div>
                    </div>
                    <div className="contact-box">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="box-info">
                            <h4>Location</h4>
                            <p>Kotlamubarakhpur, New Delhi, India </p>
                        </div>
                    </div>
                </div>
                <form ref={form} className='send-message' onSubmit={sendEmail}>
                    <h2>Send a Message</h2>
                    <div className="send-box">
                        <label htmlFor="name">Your Name</label>
                        <input ref={name} type="text" name='user_name' required />
                    </div>
                    <div className="send-box">
                        <label htmlFor="email">Your Email</label>
                        <input ref={email} type="text" name='user_email' required />
                    </div>
                    <div className="send-box">
                        <label htmlFor="message">Your Message</label>
                        <textarea ref={textarea} name="message" id="message"></textarea>
                    </div>
                    <button className='submit' type='submit' value="send" disabled={isSending}>{message} <i className="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
            {status ? <Message status={status} color={color} /> : ""}
        </div>
    )
}

export default Contact
