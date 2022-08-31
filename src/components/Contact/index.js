
import React from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react'
import { useRef } from "react";
import emailjs from "@emailjs/browser";


export default function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef();

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_ewb9gdf",
            "template_gxyzavo",
            form.current,
            "PzH7GGZlZghEtFWu9")   
            .then(
                () => {
                    alert(' Message  successfully sent!')
                    window.location.reload(false);
                },
                () => {
                    alert(' Failed to send the message, please try again!')
                    window.location.reload(false);
                });
    };


return (
    <div className='container about-page'>

        <div className='text-zone'>
            <h1>

                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e',]}
                    idx={15}
                />
            </h1>

            <p>
                I'm interested in freelance opportunities. However, if you have other request or questions,
                dont hesitate to contac me using below form either.
            </p>

            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type="text" name='name' placeholder='Name' required />
                        </li>

                        <li className='half'>
                            <input type="email" name='Email' placeholder='Email' required />
                        </li>

                        <li  >
                            <input type="text" name='subject' placeholder='Subject' required />
                        </li>

                        <li >
                            <textarea placeholder='Message' name='message' required></textarea>
                        </li>

                        <li >
                            <input type="submit" className='flat-button' value="SEND" required />
                        </li>
                    </ul>
                </form>



            </div>

        </div>

    </div>
)
}
