import React, { useState } from 'react'
import './ProductDesc.css'
import 'animate.css'
import ferrari from '../../assets/images/ferrari.png'
import ferrariys from '../../assets/images/ferrariys.png'
import ferrarirs from '../../assets/images/ferrarirs.png'
import ferrariws from '../../assets/images/ferrariws.png'
import ferrarif from '../../assets/images/ferrarif.png'
import ferrarib from '../../assets/images/ferrarib.png'
import ferrariu from '../../assets/images/ferrarilu.png'
import ferraril from '../../assets/images/ferraril.png'
import ProductDetails from '../ProductDetails/ProductDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons'
import { faGear} from '@fortawesome/free-solid-svg-icons'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import { faChair } from '@fortawesome/free-solid-svg-icons'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


import { faCloud} from '@fortawesome/free-solid-svg-icons'
import CarouselFadeExample from './CarouselFadeExample'





 


// import Reviews from '../Reviews/Reviews'

const ProductDesc = () => {
   

//     const [comment, updateComment] = useState(null);
//   const [comments, updateComments] = useState([]);

//   const onChangeHandler = (e) => {
//     updateComment(e.target.value);
//     console.log(e.target.value);

//   };

//   const addCommentToList = () => {
//     updateComments([...comments, { comment: comment, key: Date.now() }]);
//     console.log([...comments, { comment: comment, key: Date.now() }]);
//     updateComment("");

//   };
  return (
            <div className='pd'  data-aos="zoom-in " data-aos-duration="1000">
          
        <h3 className="headingpd"  data-aos="zoom-in" data-aos-duration="1500" >
            Product Description
        </h3>
      <div className="main" data-aos="zoom-out-up" data-aos-duration="1000">

        <div className="leftpd">
            <h1>vrooOM</h1>
            <div className="mainimg">
            <CarouselFadeExample/>
           {/* <img src={ferrari} alt="car" className='mainimage' /> */}
            <div className="allimg">

                <img src={ferrarif} alt="afcsdfsd" className='smallimg'/>
                <img src={ferrariu} alt="afcsdfsd" className='smallimg'/>
                <img src={ferrarib} alt="afcsdfsd" className='smallimg'/>
                <img src={ferraril} alt="afcsdfsd" className='smallimg'/>

            </div>
            </div>
        </div>
        <div className="rightpd">
            <h6 className='dir'>Home>Products>Ferrari SF90 Stradale</h6>
            <h2 className="producttitle">
            Ferrari SF90 Stradale
            </h2>
           
            <span className="descrating">4.1
            <span>
                <FontAwesomeIcon icon={faStar} className='str'/>
                <FontAwesomeIcon icon={faStar} className='str'/>
                <FontAwesomeIcon icon={faStar} className='str'/>
                <FontAwesomeIcon icon={faStar} className='str'/>
                <FontAwesomeIcon icon={faStar} />
           
            </span>
           </span>
            <span className="count">234 ratings and 598 reviews</span>
            <div className="ptag">

            {/* <span className="sprice">
                Starts  from:
            </span> */}
            <span className="descprice">
            Rs. 7.50 Cr* 
            </span>
                <span className='onroadp'>
                 Onwards
                    </span>
            </div>
                 
            {/* <p className="offershead">Offers:</p> */}
            {/* <span className="offers">Use Axis Bank Credit Cards for 5% off. <a href="/">T & C</a></span> */}
            {/* <p className="offers">Hire our Designers and get Exclusive Offers</p> */}
            <div className="colors">
            <p>Colors Available:</p>

            <img src={ferrariws} alt="afcsdfsd" className='smallimgclrs'/>
            <img src={ferrari} alt="afcsdfsd" className='smallimgclrs'/>
            <img src={ferrarirs} alt="afcsdfsd" className='smallimgclrs'/>
            <img src={ferrariys} alt="afcsdfsd" className='smallimgclrs'/>

            </div>
            <div className="btns">
            
            <button className="addtocart">I'm Interested</button>
            <br/>
            <span>
                <FontAwesomeIcon className="kf" icon={faHeart} className="wish"/>Add to Wishlist
                </span>

            
            </div>

            <div className='checkpin'>
                
            <input type="pincode" placeholder='Your Pincode' />
            
            <button className="wishlist check">Check</button>
            </div>
            
            <div className="keyfeatures">
                <div className="keyf"><FontAwesomeIcon className="kf" icon={faGaugeHigh} /><div className="kfs"><p>Mileage (upto)</p><span>16.39 kmpl</span></div></div>
                <div className="keyf"><FontAwesomeIcon className="kf" icon={faGear}/>      <div className="kfs"><p>Engine (upto)</p><span>3990 cc</span></div></div>
                <div className="keyf"><FontAwesomeIcon className="kf" icon={faGears} />    <div className="kfs"><p>Transmission</p><span>Automatic</span></div></div>
                <div className="keyf"><FontAwesomeIcon className="kf" icon={faChair} />    <div className="kfs"><p>Seats</p><span>2</span></div></div>
                <div className="keyf"><FontAwesomeIcon className="kf" icon={faCarSide} />  <div className="kfs"><p>Boot Space</p><span>74</span></div></div>
                <div className="keyf"><FontAwesomeIcon className="kf" icon={faCloud} />    <div className="kfs"><p>Airbags</p><span>yes</span></div></div>
            </div>
        </div>
        </div>

       
        
        {/* <div className="last">

<h3 className="specification">
               Ratings and Reviews 
        </h3>
        <span className="descrating">4.5</span><span className="count">(234 ratings and 598 reviews)</span>
        <div className="comments">
            <input type="text" rows='3' cols='30'  className='commentinput' placeholder='Add Your Reviews' value={comment} onChange={onChangeHandler}/>
            <button className="comment" onClick={addCommentToList}>Add Review</button>
            </div>
            <div className="reviewscontainer">

            <Reviews comments={comments} updateComment={updateComments}/>
            </div>
        </div> */}
        <ProductDetails/>
        
    </div>
  )
}

export default ProductDesc