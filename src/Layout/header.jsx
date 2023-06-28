

import './layout.css';
import { Link } from 'react-router-dom';

import { FaBrush } from 'react-icons/fa';

import edge from "../Images/edge.png";


function Header() {
    return (
        <div className="Header">

            <div className="big-head">
                <img src={edge} alt="" />
                <header>
                    <h1>
                        <FaBrush /> &nbsp;
                        PAINT
                    </h1>
                    <nav>
                        <ul>
                            <li><Link className='link' to="/home">Home</Link></li>
                            <li><Link className='link' to="/home">About</Link></li>
                            <li><Link className='link' to="/home">Services</Link></li>
                            <li><Link className='link' to="/home">Gallery</Link></li>
                            <li><Link className='link' to="/home">Team</Link></li>
                            <button>Get a Quote</button>
                        </ul>
                    </nav>

                </header>
                <img className='reverse-edge' src={edge} alt="" />
            </div>

            Hello Header
        </div>
    );
}

export default Header;
