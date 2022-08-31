
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faMedium, faWhatsapp } from '@fortawesome/free-brands-svg-icons'



const Sidebar = () => (

    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />

        </Link>

        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>


            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'  >
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>


            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact' >
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>

        </nav>
        <ul>
            <li>
                <a
                    target="_blank"
                    rel="nonreferrer noreferrer"
                    href='https://www.linkedin.com/in/moses-adeyemi/'>

                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />

                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel="nonreferrer noreferrer"
                    href='https://github.com/Moses-Adeyemi'>

                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />

                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel="nonreferrer noreferrer"
                    href="https://wa.me/+2349020019943">

                    <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e' />

                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel="nonreferrer noreferrer"
                    href='faithtech9ja.medium.com'>

                    <FontAwesomeIcon icon={faMedium} color='#4d4d4e' />

                </a>
            </li>

        </ul>

    </div>




)


export default Sidebar