

import { useRef } from 'react';


import './home.css';

import pink from '../Images/pinksplash.png';
import purple from '../Images/purplesplash.png';
import orange from '../Images/orangesplash.png';
import multiple from '../Images/multiplesplash.png';



function Service() {


    

    
const serve1 = useRef();
const serve2 = useRef();
const serve3 = useRef();
const serve4 = useRef();

const services = [
        { title: "Interior Painting", image: pink, theref: serve1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },
        { title: "Color Splash", image: multiple, theref: serve2,  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },
        { title: "Grafitti", image: orange, theref: serve3, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },
        { title: "Leisure Painting", image: purple, theref: serve4, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },

    ]

    window.addEventListener('scroll', ()=>{
        if ((window.innerHeight + window.pageYOffset) > (serve1.current.offsetTop+160)) {
            serve1.current.style.transform = "scale(1)";
            serve1.current.style.transform = "translateY(0%)";
            serve1.current.style.opacity = "1";
        } else {
            serve1.current.style.transform = "scale(0)";
            serve1.current.style.transform = "translateY(-100%)";
            serve1.current.style.opacity = "0";
        }
        
        if ((window.innerHeight + window.pageYOffset) > (serve2.current.offsetTop+160)) {
            serve2.current.style.transform = "scale(1)";
            serve2.current.style.transform = "translateX(0%)";
            serve2.current.style.opacity = "1";
        } else {
            serve2.current.style.transform = "scale(0)";
            serve2.current.style.transform = "translateX(100%)";
            serve2.current.style.opacity = "0";
        }
        if ((window.innerHeight + window.pageYOffset) > (serve3.current.offsetTop+160)) {
            serve3.current.style.transform = "scale(1)";
            serve3.current.style.transform = "translateX(0%)";
            serve3.current.style.opacity = "1";
        } else {
            serve3.current.style.transform = "scale(0)";
            serve3.current.style.transform = "translateX(-100%)";
            serve3.current.style.opacity = "0";
        }
        if ((window.innerHeight + window.pageYOffset) > (serve4.current.offsetTop+160)) {
            serve4.current.style.transform = "scale(1)";
            serve4.current.style.transform = "translateY(0%)";
            serve4.current.style.opacity = "1";
        } else {
            serve4.current.style.transform = "scale(0)";
            serve4.current.style.transform = "translateY(100%)";
            serve4.current.style.opacity = "0";
        }

    }
    )


    return (
        <div className="Service">


            {
                services.map(service => {
                    return (
                        <div className="service-1" ref={service.theref}>
                            <div>
                                <img src={service.image} alt="" />
                            </div>
                            <div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    );
}

export default Service;
