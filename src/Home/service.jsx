

import { useRef } from 'react';


import './home.css';

import interior from '../Images/interior.png';
import leisure from '../Images/leisure.jpg';
import grafitti from '../Images/grafitti.png';
import splash from '../Images/multiplesplash.png';



function Service() {


    

    
const serve1 = useRef();
const serve2 = useRef();
const serve3 = useRef();
const serve4 = useRef();

const services = [
        { title: "Interior Painting", image: interior, theref: serve1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },
        { title: "Color Splash", image: splash, theref: serve2,  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },
        { title: "Grafitti", image: grafitti, theref: serve3, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },
        { title: "Leisure Painting", image: leisure, theref: serve4, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },

    ]

    window.addEventListener('scroll', ()=>{
        if ((window.innerHeight + window.pageYOffset) > (serve1.current.offsetTop+160)) {
            serve1.current.style.transform = "scale(1)";
            serve1.current.style.transform = "translateY(0%)";
            serve1.current.style.opacity = "1";
            // serve1.current.style.display = "flex";
        } else {
            serve1.current.style.transform = "scale(0)";
            serve1.current.style.transform = "translateY(100%)";
            serve1.current.style.opacity = "0";
            // serve1.current.style.display = "none";
        }
        
        if ((window.innerHeight + window.pageYOffset) > (serve2.current.offsetTop+160)) {
            setTimeout( ()=>{
            serve2.current.style.transform = "scale(1)";
            serve2.current.style.transform = "translateY(0%)";
            serve2.current.style.opacity = "1";},500);
        } else {
            serve2.current.style.transform = "scale(0)";
            serve2.current.style.transform = "translateY(100%)";
            serve2.current.style.opacity = "0";
        }
        if ((window.innerHeight + window.pageYOffset) > (serve3.current.offsetTop+160)) {
            
            serve3.current.style.transform = "scale(1)";
            serve3.current.style.transform = "translateY(0%)";
            serve3.current.style.opacity = "1";
        } else {
            serve3.current.style.transform = "scale(0)";
            serve3.current.style.transform = "translateY(100%)";
            serve3.current.style.opacity = "0";
        }
        if ((window.innerHeight + window.pageYOffset) > (serve4.current.offsetTop+160)) {
            setTimeout( ()=>{
            serve4.current.style.transform = "scale(1)";
            serve4.current.style.transform = "translateY(0%)";
            serve4.current.style.opacity = "1";},500);
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
