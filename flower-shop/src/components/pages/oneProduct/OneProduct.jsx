import React from 'react';
import './oneProduct.scss'
import SwiperOneProduct from './swiperOneProduct/SwiperOneProduct';
import { Link } from 'react-router-dom';

const OneProduct = () => {
    return (
        <>
            
            <div className="oneProduct__container container">  
                <div className="boxOneproduct">
                    <div className="leftBox">
                        <SwiperOneProduct/>
                        <div className="leftBoxDesc">
                            <div className="description">
                                <Link>Description</Link>
                                <Link>Aditional information</Link>
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat 
                            hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris
                            eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
                            in molestie diam bibendum sed.
                            </p>
                        </div>
                    </div>
                    <div className="rightBox">
                        <h2>TRUE LOVE</h2>
                        <h4>$ 115,00</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat 
                        hendrerit...Showmore
                            </p>
                        <h6>Size:</h6>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <h6>Total $ 115.00 </h6>
                        <div className="count">
                            <div className="incDecriment-btn">
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                            <button className="add-btn">ADD TO CART</button>
                        </div>
                        <h6>Check availability at:</h6>
                        <div className="enterZipcode">
                            <input type="text" placeholder='Enter zipcode...' />
                            <button>CHECK YOUR ZIPCODE</button>
                        </div>
                        <div className="rightBox-choice">
                            <div className="choice-title">
                                <h2>Add A Small Extra Gift</h2>
                                <Link>VIEW ALL</Link>
                                <div className="choice-product">
                                    <div className="choice-cart">
                                        <h4>Candle</h4>
                                        <p>$ 50,00</p>
                                    </div>
                                    <div className="choice-cart">
                                        <h4>Candle</h4>
                                        <p>$ 50,00</p>
                                    </div>
                                    <div className="choice-cart">
                                        <h4>Candle</h4>
                                        <p>$ 50,00</p>
                                    </div>
                                    <div className="choice-cart">
                                        <h4>Candle</h4>
                                        <p>$ 50,00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="similarItems">

                    <h2>Similar Items</h2>
                    <div className="box-items">
                        <div className="item-cart">
                            <h4>WHITE ROSES</h4>
                            <p>$ 89,00 - 345,00</p>
                        </div>
                        <div className="item-cart">
                            <h4>WHITE ROSES</h4>
                            <p>$ 89,00 - 345,00</p>
                        </div>
                        <div className="item-cart">
                            <h4>WHITE ROSES</h4>
                            <p>$ 89,00 - 345,00</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default OneProduct;