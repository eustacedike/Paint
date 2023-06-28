
import { useRef } from 'react';



import './home.css';

import magicPic from "../Images/magic.jpg";


function Advert() {



    const magic = useRef();


  window.addEventListener('scroll', ()=>{

        if ((window.innerHeight + window.pageYOffset) > (magic.current.offsetTop+160)) {
            magic.current.style.transform = "scale(1)";
            magic.current.style.transform = "translateY(0%)";
            magic.current.style.opacity = "1";
        } else {
            magic.current.style.transform = "scale(0)";
            magic.current.style.transform = "translateY(-100%)";
            magic.current.style.opacity = "0";
        }

        // console.log(window.innerHeight);
        // console.log(window.pageYOffset);
        // console.log(magic.current.offsetTop);
    }
    )


  


    return (
      <div className="Advert">
       
          <div ref={magic} className='advert-1'>
            <img src={magicPic} alt="" />
          </div>
          <div className='advert-2'>
            <h2>Create Magic with Us</h2> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eaque voluptas veniam suscipit quam doloribus corporis sint neque eum culpa.</p>
            
<button>PAINT WITH US</button>
          </div>
        
        
      </div>
    );
  }
  
  export default Advert;
  