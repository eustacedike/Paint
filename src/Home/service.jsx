

import { useRef } from 'react';


import './home.css';

import pink from '../Images/pinksplash.png';
import purple from '../Images/purplesplash.png';
import orange from '../Images/orangesplash.png';
import multiple from '../Images/multiplesplash.png';



function Service() {


    const services = [
        { title: "Interior Painting", image: pink, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },
        { title: "Color Splash", image: multiple, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },
        { title: "Grafitti", image: orange, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },
        { title: "Leisure Painting", image: purple, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },

    ]

    
    // window.addEventListener('load', ()=>{
    //     navbar.current.style.backgroundColor = "red";
    // }
    // )

    // window.addEventListener('scroll', ()=>{

    //     if ((window.innerHeight + window.pageYOffset) > (navbar.offsetTop + 160)) {
    //         navbar.style.transform = "scale(1)";
    //     } else {
    //         navbar.style.transform = "scale(0)";
    //     }
    // }
    // )


    return (
        <div className="Service">


            {
                services.map(service => {
                    return (
                        <div className="service-1">
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
