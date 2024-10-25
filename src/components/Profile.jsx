import React from 'react';
import { Link } from 'react-router-dom';
import { Social } from '../Utils/Constants';
import "../resources/css/profile.css";
import me from "../resources/images/me.jpg";
import arr from "../resources/images/Arrow-Left-icon.png";

export default function Profile() {
    return (
        <div>
            <div className="ProfilePicDiv">
                <img alt="sashank" className="profilePic" src={me} />
            </div>
            <div className='lobster' style={{ Align: 'center' }}    >
                 keep in touch with me...  <img alt="scroll down" className="hel" src={arr}/>                                                     
            </div>
            <div>
                
            </div>
            
            

            <div>
                {Social.map((data, index) => (
                    <Link 
                        to={data.link} 
                        target='_blank' 
                        style={{ textDecoration: 'none' }}
                        key={index}
                    >
                        {/* Apply inline styles to the icon for size and color */}
                        <span className="ProfileIcons">{React.cloneElement(data.icon, { 
                                style: { width: '110%', height: '100%' } 
                            })}</span>
                       
                       
                    </Link>
                ))}
            </div>
        </div>
    );
}
