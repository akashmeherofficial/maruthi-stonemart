import React from 'react'
import './Navbar.css'
// import {NavLink} from 'react-router-dom'
import ferrarilogo from '../../assets/images/ferrarilogo.jpg'
import 'animate.css';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
      <div className="navouter">
    <div className='header'>

         <div className="leftnav">
          <img src={ferrarilogo} alt="logo" className='logo' />
        <span className='logoname'>
            vro 
            </span>
            <span className='nametwo' >oOM</span>
       </div>
       <div className="rightnav">
            <ul className='nav'>
            <li className="navitem">Home</li>
            <li className="navitem"><Link to="aboutus" spy={true} smooth={true} offset={50} duration={500}>About us</Link></li>
            <li className="navitem"><Link to="products" spy={true} smooth={true} offset={50} duration={500}>Product</Link></li>
            <li className="navitem"><Link to="benefits" spy={true} smooth={true} offset={50} duration={500}>Benefits</Link></li>
            <li className="navitem"><Link to="pricing" spy={true} smooth={true} offset={50} duration={500}>Pricing</Link></li>
            <div className="anim"></div>
                {/* <li ><NavLink to="/" className="navitem">Home</NavLink></li>
                <li ><NavLink to="/products" className="navitem">Products</NavLink></li>
                <li ><NavLink to="/about" className="navitem">About</NavLink></li> */}
            </ul>
            <div className="getstarted">

                <button className="navitembtn"><Link to="products" spy={true} smooth={true} offset={50} duration={500}>Get Started</Link></button>
            </div>
       </div>
      </div>
    </div>
  )
}

export default Navbar