

import { useRef } from 'react';


import './home.css';

import event1 from '../Images/gall1.jpg';
import event2 from '../Images/gall2.jpg';
import event3 from '../Images/gall3.jpg';
import event4 from '../Images/gall4.jpg';

// import room from "../Images/room.jpg";



function Events() {





    const eventOne = useRef();
    const eventTwo = useRef();

    const comingEvents = [
        { title: "Paint-A-Thon", image: event4, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },
        { title: "Splaaash", image: event1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },
        { title: "Holiday Special", image: event3, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },
        { title: "Paint Ball", image: event2, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem optio, possimus minus enim error libero ullam?" },

    ]


    window.addEventListener('scroll', ()=>{
        if ((window.innerHeight + window.pageYOffset) > (eventTwo.current.offsetTop)) {
            eventTwo.current.classList.add("animated");
        } else {
            eventTwo.current.classList.remove("animated");

        }
    })



    return (
        <div className="Events">
            <div className="events-1" ref={eventTwo}>
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
