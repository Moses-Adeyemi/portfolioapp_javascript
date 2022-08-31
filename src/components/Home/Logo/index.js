import './index.scss'
import LogoS from '../../../assets/images/logoTitle.png'
import { useRef, useEffect } from 'react';
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';


const Logo = () => {

    const bgRef = useRef();
    const outlinelogoRef = useRef();
    const solidlogoRef = useRef();

useEffect(() => {
gsap.registerPlugin(DrawSVGPlugin)

gsap.timeline()
.to(bgRef.current,{
    duration:1,
    opacity:.5,
})
.from(outlinelogoRef.current, {
    drawSVG:0,
    duration:20,
})
gsap.fromTo(
    solidlogoRef.current,{
        opacity:0,
    },{
        opacity:.2,
        delay:4,
        duration:8,
    }
)
}, [])

    return (
        <div className='logo-container'  ref={bgRef}>
            <img ref={solidlogoRef}  src={LogoS} alt='logo' className='solid-logo' />
            <svg
                width="559pt"
                height="897pt"
                version='1.0'
                xmlns='http://www.w3.org/200/svg'
            >
                <g className='svg-container'

                    transform='translate(0 457) scale(.1 -.1)'
                    fill='none'
                >
                    <path ref={outlinelogoRef}/>
                </g>
            </svg>


        </div>
    );
}

export default Logo;
