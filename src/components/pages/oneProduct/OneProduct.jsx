import React, { useEffect} from 'react';
import './oneProduct.scss'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios'; 
import { useSelector, useDispatch } from 'react-redux';
import { setProduct } from '../../../store/oneProductSlice';
import SwiperOneProduct from './swiperOneProduct/SwiperOneProduct'
import { addToCart } from '../../../store/cartSlice';
import { updateCart } from '../../../store/cartSlice';




const OneProduct = () => {
    let localUser = localStorage.getItem('user');
    let parsedUser = JSON.parse(localUser);
    
    
    const dispatch = useDispatch()
    const add = (el) => {
        dispatch(addToCart(el))
    }

    const location = useLocation()
    const idProd = location.pathname.split('/').at(-1) 
    useEffect(() => {
        axios(`http://localhost:8080/flowers/${idProd}`)
            .then(({data}) => dispatch(setProduct(data)))
    },[dispatch, idProd])

   
    const data = useSelector(state => state.productSlice.data)
    // const cart = useSelector(state => state.cartSlice.cart)

    const decrement = (el) => {
        if (el.count > 1) {
            dispatch(updateCart({...el, count: el.count -1}))
        } 
    }
    const increment = (el) => {
        if (el.count < 9)
        dispatch(updateCart({ ...el, count: el.count + 1 }));
    };
   
    return (
        <>
            
            <div className="oneProduct__container container">  
                <div className="boxOneproduct">
                    <div className="leftBox">
                        <SwiperOneProduct data={data}/>
                        <div className="leftBoxDesc">
                            <div className="description">
                                <Link>Description</Link>
                                <Link>Aditional information</Link>
                            </div>
                            <p>{data.description}</p>
                        </div>
                    </div>
                    <div className="rightBox">
                        <h2>{data.name}</h2>
                        <h4>$ {data.price}</h4>
                        <p>{data.description}</p>
                        <h6>Size:</h6>
                        <button className='btn-size'>S</button>
                        <button className='btn-size'>M</button>
                        <button className='btn-size'>L</button>
                        <h6>Total $ 0 </h6>
                        
                        
                        <div className="count">
                            <div className="incDecriment-btn">
                                <button onClick={() => {decrement(data)}}>-</button>
                                <p>0</p>
                                <button onClick={increment(data)}>+</button>
                            </div>
                            <button className="add-btn" onClick={()=> {parsedUser?add({...data, count:1}):alert('Чтобы добавить товар пройдите регистрацию')}} >ADD TO CART</button>
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
                            </div>
                            <div className="choice-product">
                                <div className="choice-cart">
                                    <div className="choice-cartTitle">
                                        <h4>Candle</h4>
                                        <p>$ 50,00</p>
                                    </div>
                                </div>
                                <div className="choice-cart">
                                    <div className="choice-cartTitle">
                                        <h4>Candle</h4>
                                        <p>$ 50,00</p>
                                    </div>
                                </div>
                                <div className="choice-cart">
                                    <div className="choice-cartTitle">
                                        <h4>Candle</h4>
                                        <p>$ 50,00</p>
                                    </div>
                                </div>
                                <div className="choice-cart">
                                    <div className="choice-cartTitle">
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
                            <div className="item-cartTitle">
                                <h4>WHITE ROSES</h4>
                                <p>$ 89,00 - 345,00</p>
                            </div>
                            
                        </div>
                        <div className="item-cart">
                            <div className="item-cartTitle">
                                <h4>WHITE ROSES</h4>
                                <p>$ 89,00 - 345,00</p>
                            </div>
                        </div>
                        <div className="item-cart">
                            <div className="item-cartTitle">
                                <h4>WHITE ROSES</h4>
                                <p>$ 89,00 - 345,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default OneProduct;