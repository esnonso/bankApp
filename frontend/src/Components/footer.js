import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub,  faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className="footer-first">
                    <p> <FontAwesomeIcon icon={faFacebook} size="3x"/> </p>
                    <p><FontAwesomeIcon icon={faInstagram} size="3x"/></p> 
                    <p><FontAwesomeIcon icon={faLinkedinIn} size="3x"/></p>   
                       
                </div>
                <div className="footer-2">
                  <h1 >WORLD BEST BANK</h1>
                  <em>A local bank to serve the world</em>
                </div>

                <div className="footer-last">
                        <p>&copy;2021 World Best Bank</p>
                </div>
            </div>
        )
    }
}

export default Footer;