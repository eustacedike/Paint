

import './layout.css';
import { Link, useLocation } from 'react-router-dom';

import { FaBrush } from 'react-icons/fa';
import { BsUiChecksGrid } from 'react-icons/bs';

import logo from "../Images/logo.png";
import edge from "../Images/edge.png";
import revEdge from "../Images/rev-edge.png";
import bigEdge from "../Images/big-edge.png";
import bigRevEdge from "../Images/big-rev-edge.png";

import { useRef, useState } from 'react';


function Header() {

    const navbar = useRef();

    const [menu, setMenu] = useState(false);

    const location = useLocation();

    return (
        <div 
        // className="Header"
        className={location.pathname === "/gallery" ? "Header G-Head" :
        //   location.pathname === "/trending" ? "Navigation nav-alt" :
        //     location.pathname === "/write" ? "Navigation nav-alt" :
        //       location.pathname === "/categories" ? "Navigation nav-alt2" :
        //         location.pathname === "/loading" ? "Navigation nav-alt2" :
        //           location.pathname === '/error' ? "Navigation nav-alt2" :
                    "Header"}

        >

            <div className="mobile" style={{transform: menu? "translateX(0%)":"translateX(-100%)"}}>
            <h2 className='close' onClick={()=>setMenu(!menu)}>&#10006;</h2> <br /> <br />
                        <ul>
                            <li><Link className='link' onClick={()=>setMenu(false)} to="/">HOME</Link></li>
                            <li><Link className='link' to="/home" onClick={()=>setMenu(false)}>EVENTS</Link></li>
                            {/* <li><Link className='link' to="/home">SERVICES</Link></li> */}
                            <li><Link className='link' to="/gallery" onClick={()=>setMenu(false)}>GALLERY</Link></li>
                            <li><Link className='link' to="/home" onClick={()=>setMenu(false)}>ABOUT US</Link></li>
                            <button className='quote' onClick={()=>setMenu(false)}>HOST WITH US</button>
                        </ul>
                  
            </div>

            <div className="big-head">
                <img src={edge} alt="" />
                <header ref={navbar}>
                    {/* <h1><FaBrush /> &nbsp; PAINT</h1> */}
                    <img className='logo' src={logo} alt="" />
                    <nav>
                        <ul>
                            <li><Link className='link' to="/">HOME</Link></li>
                            <li><Link className='link' to="/home">EVENTS</Link></li>
                            {/* <li><Link className='link' to="/home">SERVICES</Link></li> */}
                            <li><Link className='link' to="/gallery">GALLERY</Link></li>
                            <li><Link className='link' to="/home">ABOUT US</Link></li>
                            <button className='grid' onClick={()=>setMenu(!menu)}><BsUiChecksGrid/></button>
                            <button className='quote'>HOST WITH US</button>
                        </ul>
                    </nav>

                </header>
                <img src={revEdge} alt="" />
            </div>

<div className="G-topic">
    <h1>GALLERY</h1>
</div>

            <div className="outer-banner">
                <img src={bigEdge} alt="" />

                <div className="banner">
                    <h2>We will paint your dreams into reality</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, sint tempore! Ea facilis quidem cupiditate itaque adipisci obcaecati assumenda alias enim possimus, quo aut laboriosam!</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, sint tempore! Ea facilis quidem cupiditate itaque adipisci obcaecati assumenda alias enim possimus, quo aut laboriosam!</p>

                    <button>GET STARTED</button>
                </div>
                <img src={bigRevEdge} alt="" />

            </div>
        </div>
    );
}

export default Header;
