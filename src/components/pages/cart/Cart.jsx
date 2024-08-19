import React from 'react';
import './cart.scss'
import { Link } from 'react-router-dom';
import Datepicker from './datePicker/Datepicker';
import deliveryIcon from './icons/Local_delivery.png';
import storeIcon from './icons/Store_pickup.png'
import { useSelector, useDispatch } from 'react-redux';
import { removeCart, updateCart } from '../../../store/cartSlice';






const Cart = () => {

    const dispatch = useDispatch()
    const {cart} = useSelector(state => state.cartSlice)

    const remove = (el) => {
        dispatch(removeCart(el))
    }
    const decrement = (el) => {
        if (el.count > 1) {
            dispatch(updateCart({...el, count: el.count -1}))
        } else {
            dispatch(removeCart(el))
        }
    }
    const increment = (el) => {
        if (el.count < 9)
        dispatch(updateCart({ ...el, count: el.count + 1 }));
    };
    return (
        <>
            <div className="cart__container container">
                <h1>YOUR CART</h1>
                <Link to={'/'}>RETURN TO SHOP</Link>
                <div className="cart__box">
                    <div className="cart-products">
                    {cart.map((el) => (
                        <div className="cart-item">
                            <Link to={`/OneProduct/${el.id}`}>
                                <img src={el.img} alt="flower" />
                            </Link>
                            
                            <div className="cart-title">
                                <h3>{el.name}</h3>
                                <p>M</p>
                                <p className='price'>$ {el.price}</p>
                            </div>
                            <div className="btn-count">
                                <button onClick={() => decrement(el)}>-</button>
                                <h4>{el.count >= 9 ? 'limit' : el.count}</h4>
                                <button onClick={() => increment(el)}>+</button>
                            </div>
                            <div className="close" onClick={()=>remove(el)}>X</div>
                        </div> 
                    ))}
                    </div>
                   
                    <div className="cart-totals">
                        <h2>Cart totals</h2>
                        <div className="subtotal">
                            <h6>SUBTOTAL</h6>
                            <p>
                                <span>$ {cart.reduce((acc, el) => (
                                acc + +el.price * el.count
                            ),0)}  AUD</span> <br /><br />
                                Tax included Shipping calculated at checkout
                            </p>
                        </div>
                        <div className="deliveryBox">
                            <img src={deliveryIcon} alt="" />
                            <img src={storeIcon} alt="" />
                        </div>
                        <div className="delivery-time">
                             <Datepicker/>
                            
                        </div>
                        <div className="total">
                            <h4>total</h4>
                            <h6>$ 0
                            </h6>
                        </div>
                        <div className="sending">

                            <Link to={'/checkout'}>
                                <button>PROCEED TO CHECKOUT</button>
                            </Link>
                            
                            <p>Congratulations! You are eligible for free shipping.</p>
                        </div>                       
                    </div>
                </div>
            </div>       
        </>
        
    );
};

export default Cart;