import React from 'react';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { Loader } from 'react-loaders'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>

                <div className='text-zone'>
                    <h1>

                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']}
                            idx={15}
                        />
                    </h1>

                    <p>
                        I'm an ambitious front-end Developer looking for a role in
                        an extablished It company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    < br />
                    <p>
                        I thrive on bringing ideas to life and
                        delivering eye-catching results ahead of schedule. All whilst possessing a keen eye for design,
                        accessibility, and well-structured code.

                    </p>
                    < br />
                    <p>
                        If I need to define myself in one sentence that would be : A tech enthusiast who believes in integrating FAITH & TECHNOLOGY
                        for purposeful impact and changing the world for Christ by using technology !!!
                    </p>


                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>

                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>

                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>

                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                        </div>

                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
                        </div>

                        <div className='face6'>
                            <FontAwesomeIcon icon={faGithub} color="#ec4d28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>

    );
}

export default About;
