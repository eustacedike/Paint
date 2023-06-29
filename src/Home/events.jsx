

import { useRef } from 'react';


import './home.css';

import pink from '../Images/pinksplash.png';
import purple from '../Images/purplesplash.png';
import orange from '../Images/orangesplash.png';
import multiple from '../Images/multiplesplash.png';

import room from "../Images/room.jpg";



function Events() {





    const eventTwo = useRef();

    const comingEvents = [
        { title: "Paint-A-Thon", image: room, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },
        { title: "Splaaash", image: multiple, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },
        { title: "Holiday Special", image: room, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },
        { title: "Paint Ball", image: purple, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },

    ]


    // window.addEventListener('scroll', ()=>{
    //     if ((window.innerHeight + window.pageYOffset) > (eventTwo.current.offsetTop+160)) {
    //         serve1.current.style.transform = "scale(1)";
    //         serve1.current.style.transform = "translateY(0%)";
    //         serve1.current.style.opacity = "1";
    //     } else {
    //         serve1.current.style.transform = "scale(0)";
    //         serve1.current.style.transform = "translateY(-100%)";
    //         serve1.current.style.opacity = "0";
    //     }
    // })



    return (
        <div className="Events">
            <div className="events-1">
                <h2>Upcoming Events</h2>
               <br /> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, at sapiente. Aliquam praesentium natus amet quod rerum mollitia ullam quo?</p>
            </div>

            <div className="events-2" ref={eventTwo}>

                {
                    comingEvents.map(upcoming => {
                        return (
                            <div>
                                <h4>{upcoming.title}</h4>
                                <img src={upcoming.image} alt="" />
                                
                            </div>
                        )
                    })
                }


            </div>

            <button>MORE EVENTS...</button>
            </div>
            );
}

            export default Events;
