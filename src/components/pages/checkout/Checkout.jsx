import React from 'react';
import './checkout.scss'
import { Link } from 'react-router-dom';
import imgFlower from './images/image-prod.png'

const Checkout = () => {
    return (
        <>
            <div className="checkout__container container">
                <div className="checkoutTitle">
                    <h1>SECURE CHECKOUT</h1>
                    <p>
                        Some day flower delivery to Sydnay suburbs, Monday to Saturday. Urgen delivery? Questions?
                        Call us on (0687) 876 54 32
                    </p>
                </div>              
                <div className="checkout__box">
                    <div className="left-box">
                        <ul className="left-box__nav">
                            <li>
                                <Link>NEW BUYER</Link>
                            </li>
                            <li>
                                <Link>ReGULAR CUSTOMER</Link>
                            </li>                           
                        </ul>
                        <ul className='details'>
                            <li>
                                <div className="num">1</div>
                                Your Details 
                            </li>
                            <li>
                                <div className="num">2</div>
                                Your Details 
                            </li>
                            <li>
                                <div className="num">3</div>
                                Your Details 
                            </li>
                        </ul>
                        <form className='form'>
                            <div className="firstName">
                                <label htmlFor="" >First name *
                                    <input type="text" required />
                                </label>
                            </div>
                            <div className="firstName" >
                                <label htmlFor="" >Last name 
                                    <input type="text" required />
                                </label>
                            </div>
                            <div className="firstName">
                                <label htmlFor="" >Phone *
                                    <input type="tel" required />
                                </label>
                            </div>
                            <div className="firstName">
                                <label htmlFor="" >E-mail *
                                    <input type="email" required/>
                                </label>
                            </div>  
                        </form>
                        <button>CONTINUE</button>
                    </div>
                    <div className="right-box">
                        <div className="right-boxTitle">
                            <h2>ORDER SUMMARY</h2>
                            <Link>RETURN TO SHOP</Link>
                        </div>
                        <p>3 items</p>
                        <div className="right-box__product">
                            <div className="product-main">
                                <img src={imgFlower} alt="image-flower" />
                                <div className="info">
                                    <h4>True Love</h4>
                                    <h6>S</h6>
                                    <p>$ 120,00</p>
                                    <h5>QTY:1+</h5>
                                </div>
                            </div>
                            <div className="close">X</div>
                        </div>
                        <div className="total-box">
                            <div className="total">
                                <h4>total</h4>
                                <h4>$ 360,00</h4>
                            </div>
                            <div className="shipping">
                                <h3>SHIPPING</h3>
                                <p>Free shipping</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;