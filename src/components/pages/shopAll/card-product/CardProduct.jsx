import React from 'react';
import '../card-product/CardProduct.scss'
import iconBag from '../icons/icon-bag.png'
import { Link } from 'react-router-dom';
import { animateScroll } from 'react-scroll'

const CardProduct = ({el}) => {

    const toTop = () => {
        animateScroll.scrollToTop({
            display: 0,
            duration: 0,
            smooth: true
        })
    }
    return (
        <>
            <div className="card-product">
                <Link to={`/OneProduct/${el.id}`} onClick={()=>{toTop()}}>
                    <img className='product-banner' src={el.img} alt="flower" />
                </Link>  
                <div className="title-text">                  
                    <div className="box-title">
                        <h4>{el.name}</h4>
                        <p>$ {el.price}</p>
                    </div> 
                    <Link to={`/OneProduct/${el.id}`} onClick={()=>{toTop()}}>
                        <img src={iconBag} alt="icon-bag" /> 
                    </Link>                                   
                </div>                   
            </div>   
        </>   
    );
};

export default CardProduct;