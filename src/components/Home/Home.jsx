import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faShield } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Navbar/Navbar'
import ferrari from '../../assets/images/ferrari.png'
import 'animate.css';
import { Link } from 'react-scroll';
import Typical from 'react-typical'
import { NavLink } from 'react-router-dom'
import About from '../About/About'


const Home = () => {
  return (
    <div className='home' id='/'>
      <Navbar/>
    <div className="first">

    <div className=" left-h">
    <h2 className="animate__animated animate__flipInX hello">Let's make your</h2>
    <h2 className="animate__animated animate__flipInX hello">car search easier</h2>
    <h2 className="animate__animated animate__flipInX hello">than ever</h2>
    {/* <h1 className="name">Vrooom</h1> */}

    <div className='leftitem'>
       


      <span className="work">An simplified app</span>

      <br/>
      
      <span className="work">For 
      <Typical
        steps={[' Exploration', 2000, ' Insights', 2000, ' Purchase',2000]}
        loop={Infinity}
        
        className="typical"
        
        >
      </Typical>
        </span>
    <br/>
      <span className="work"><Typical steps={['Manage your time with spanding analytics',1000]} ></Typical></span>
      <br/>

    </div>
    <div className="btns">

    <NavLink className='getstarted' to="products" spy={true} smooth={true} offset={10} duration={500}><button class="explorebtn">Get Started</button></NavLink>
      <button class="learnbtn"><Link to="aboutus" spy={true} smooth={true} offset={50} duration={500}>Learn More</Link></button>
    </div>

    <div className="features">
      <div className="sec">
    <FontAwesomeIcon icon={faUsers}  className='icon'/>
        <div className='detail'>
          
    <p className="count">50 000+</p>
    <span className="detailsh">Active users</span>
        </div>
      </div>
      <div className="sec">
      <FontAwesomeIcon icon={faStar}  className='icon'/>
      <div className='detail'>
          
    <p className="count">32+</p>
    <span className="detailsh">Awards</span>
          </div>
      </div>
      <div className="sec">
      <FontAwesomeIcon icon={faShield} className='icon'/>
      <div className='detail'>
          
    <p className="count" >Security</p>
    <span className="detailsh">Money Protected</span>
          </div>
      </div>
    </div>
  </div>
  
  <div className="animate__animated animate__backInRight right-h">
      <img src={ferrari} alt="CarImage" className='car'/>
  </div>
</div>
<About/>
</div>

  )
}

export default Home