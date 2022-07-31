import React from 'react'
import './ProductDetails.css'

const ProductDetails = () => {
  return (
    <> 
    <div className="secondaryf" >
    <div className="details" >
        <h2 className='headingpd'>SF90 Stradale Specs, Features and Price</h2>
        <p>The Ferrari SF90 Stradale has 1 Petrol Engine on offer. The Petrol engine is 3990 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the SF90 Stradale has a mileage of 16.39 kmpl . The SF90 Stradale is a 2 seater 8 cylinder car and has length of 4710mm, width of 1972mm and a wheelbase of 2650mm.</p>
    </div> 
    <div className="featspec">

       <div className="features fs" >
        <h2>Features</h2>
        <ul>
        <li className="list">WLTP Mileage<span>16.39 kmpl</span></li>
        <li className="list">Engine Displacement (cc)<span>3990</span></li>
        <li className="list">Max Power (bhp@rpm)<span>769.31@7500rpm</span></li>
        <li className="list">Seating Capacity<span>2</span></li>
        <li className="list">Boot Space (Litres)<span>74</span></li>
        <li className="list">Body Type<span>Coupe</span></li>
        <li className="list">Fuel Type<span>Petrol</span></li>
        <li className="list">No. of cylinder<span>8</span></li>
        <li className="list">Max Torque (nm@rpm)<span>800Nm@6000rpm</span></li>
        <li className="list">TransmissionType<span>Automatic</span></li>
        <li className="list">Fuel Tank Capacity<span>68.0</span></li>
        </ul>
        </div>
       <div className="specifications fs" >
        <h2>Specifications</h2>
        <ul>

        <li className="list">Anti Lock Braking System<span>Yes</span></li>
        <li className="list">Air Conditioner<span>yes</span></li>
        <li className="list">Driver Airbag<span>yes</span></li>
        <li className="list">Passenger <span>no</span></li>
        <li className="list">AirbagAlloy <span>yes</span></li>
        <li className="list">WheelsWheel <span>yes</span></li>
        <li className="list">CoversFog <span>no</span></li>
        <li className="list">Lights - Front<span>yes</span></li>
       
      







        </ul>
        </div> 
    </div>
</div></>
  )
}

export default ProductDetails