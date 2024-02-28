import React, { Component } from 'react'
import './about.css'
import User from '../images/user.png'
import Address from "../images/adress.png"
import DOB from "../images/DOB.png"
import Gender from "../images/gender.png"
import  Email from "../images/email.png"
import phone from "../images/phone.png"
import languages from "../images/languagesKnown.png"
import Marriage from "../images/mariatal.png"

export class About extends Component {
  render() {
    return (
      <div className='about' id='about'>
        <div className="personal">
            <h1>Personal  Information</h1>
            <div className="info">
           
               
                <div className="details">
                <img src={DOB} alt="" />
                    <p>22 May 2002</p>
                </div>
                <div className="details">
                <img src={Gender} alt="" />
          
                    <p>Female</p>
                </div>
                <div className="details">
                <img src={Marriage} alt="" />
                    <p>UnMarried</p>
                </div>
               
                <div className="details">
                <img src={Email} alt="" />
    
                    <p>msbhavana22@gmail.com</p>
                </div>
                <div className="details">
                <img src={phone} alt="" />
       
                    <p>+91 9108333665 <br /> +91 9353120410</p>
                </div>
                <div className="details">
                <img src={languages} alt="" />

                    <p>Kannada, English, Telugu</p>
                </div>
                <div className="details">
                <img src={Address} alt="" />
                    <p>Omkrupa, 6, Chunchgatta Main Rd, Silicon Enclave Residential Layout, Bank Colony, Konanakunte, Bengaluru, Karnataka-560062</p>
                </div>
                <div className="details">
                <img src={User} alt="" />
                    <p>Cooking, Mehendi and Rangoli Designing, Embroidry, Gardening, Listening to Music, Athletic Activities, Tailoring, Mandala Designing  </p>
                </div>
                
            </div>
        <h1>Educational Details </h1>
        <div className="edu">
            <div className="engg">
                <h4>Information Science and Engineering - B.E</h4>
                <h4>at Jawaharlal Nehru New College of Engineering, Shivamogga under VTU, Belagavi</h4>
                <h4>(2019 - 2023)</h4>
            </div>
            <div className="puc">
                <h4>Pre- University Certification in PCMB(Physics, Chemistry,Mathematics, Biology)</h4>
                <h4>at SRS PU College, Chitradurga under Karnataka Pre-University Board</h4>
                <h4>(2017 - 2019)</h4>
            </div>
            <div className="sslc">
                <h4>Secondary School Leaving Certificate (SSLC)</h4>
                <h4>at Government High School,Doddasiddavvanahalli under Karnataka Secondary Education Board</h4>
                <h4>(2018 - 2029)</h4>
            </div>
        </div>
        </div>
           
      
      </div>
    )
  }
}

export default About