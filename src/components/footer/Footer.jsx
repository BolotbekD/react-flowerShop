import React from 'react';
import { Link } from 'react-router-dom';
import './styles/footer.scss'
import iconVisa from './icons/icon-Visa.png'
import iconApple from './icons/icon-ApplePay.png'
import iconMaster from './icons/icon-Mastercard.png'
import iconPay from './icons/icon-payPal.png'
import iconInstagram from './icons/icon-instagram.png'
import iconEmail from './icons/icon-email.png'
import iconPhone from './icons/icon-phone.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <div className="footer__container-services">
                    <h4>SERVICES</h4>
                    <ul>
                        <li><Link>Delivery & Pick Up</Link></li>
                        <li><Link>FAQ</Link></li>
                        <li><Link>How to consume & store an edible gifts</Link></li>
                        <li><Link>How to carry the flowers</Link></li>
                        <li><Link>Corporate gifts</Link></li>
                        <li><Link>Privacy Policy</Link></li>
                        <li><Link>Cancelation & Refund Policy</Link></li>
                        <li><Link>Terms Of Service</Link></li>
                    </ul>
                </div>
                <div className="footer__container-contactUs">
                    <h4>CONTACT US</h4>
                    <ul>
                        <li>
                            <img src={iconInstagram} alt="icon-instagram" />
                            <a href="https://www.instagram.com/strawbarbie_syd?igsh=b2V3bTdwZmZmYjR0">@strawbarbie_syd</a>
                        </li>
                        <li>
                            <img src={iconEmail} alt="icon-email" />
                            <Link>strawbarbie.syd@gmail.com</Link>
                            
                        </li>
                        <li>
                            <img src={iconPhone} alt="icon-phone" />
                            <Link>+61423051336</Link>
                        </li>
                    </ul>
                    <h5>
                        Pick Up Address: <br />
                        <Link>
                            1 C Betty Cuthbert Avenue, 
                            Sydney Olympic Park, 2127
                        </Link>
                    </h5>       
                    <p>
                        ©2022 StrawBarbie
                    </p>
                </div>
                <div className="footer__container-payment">
                    <ul>
                        <li><Link><img src={iconVisa} alt="icon-Visa" /></Link></li>
                        <li><Link><img src={iconApple} alt="icon-ApplePay" /></Link></li>
                        <li><Link><img src={iconMaster} alt="icon-Mastercard" /></Link></li>
                        <li><Link><img src={iconPay} alt="icon-payPal" /></Link></li>
                    </ul>
                    <p>
                        ©2022 StrawBarbie
                    </p>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;