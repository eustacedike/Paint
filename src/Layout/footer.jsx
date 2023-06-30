
import { FaLocationArrow, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
// import './home.css';


import logo from "../Images/logo.png";


function Footer() {
    return (
      <div className="Footer">
        <footer>
          <div className="footer-1">

          <ul>
            <li><h2>About Us</h2></li> <br />
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente temporibus consectetur consequuntur, vero dolor tenetur.</li>
            <li className="socials">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </li>
          </ul>
          <ul>
            <li><h2>Useful Links</h2></li> <br />
            <li><Link className='link' to="/home">Home</Link></li>
            <li><Link className='link' to="/home">Contact Us</Link></li>
            <li><Link className='link' to="/home">Get Started</Link></li>
            <li><Link className='link' to="/home">About Us</Link></li>
            <li><Link className='link' to="/home">Team</Link></li>
          </ul>


          <ul>
            <li><h2>Newsletter</h2></li> <br />
            <li>Subscribe to our newsletter for updates</li>
            <li><input type="email" name="" id="" /></li>
            <li><button>SUBSCRIBE</button></li>
          </ul>

          <ul>
            <li><h2>Help</h2></li> <br />
            <li><Link className='link' to="/home">Speak with Us</Link></li>
            <li><Link className='link' to="/home">Getting Started</Link></li>
            <li><Link className='link' to="/home">Services</Link></li>
            <li><Link className='link' to="/home">FAQs</Link></li>
          </ul>
          
          
          </div>
          <hr />
          <div className="footer-2">
            
            {/* <div className="log">
              <img src={logo} alt="" />
            </div> */}
            <div>
              <h3><FaPhone/> &nbsp; Call Us</h3> <br />
              <h4>+234 703 123 4567</h4>
            </div>
            <div>
              <h3><FaEnvelope/> &nbsp; Email Us</h3> <br />
              <h4>+234 703 123 4567</h4>
            </div>
            <div>
              <h3> <FaLocationArrow/> &nbsp; Location</h3> <br />
              <h4>15 Peter Odili Rd, Port Harcourt</h4>
            </div>
          </div>
        </footer>
        
        <p>&copy; Copyright Paint 2023 </p>
      </div>
    );
  }
  
  export default Footer;
  