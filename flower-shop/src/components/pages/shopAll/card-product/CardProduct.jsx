import React from 'react';
import '../card-product/CardProduct.scss'
import iconBag from '../icons/icon-bag.png'
import { Link } from 'react-router-dom';


const CardProduct = () => {
    return (
            <div className="card-product">
                <div className="title-text">
                    <Link to={'/OneProduct'}>
                        <div className="box-title">
                            <h4>HUGS & KISSES</h4>
                            <p>$ 79.00-149.00</p>
                        </div>
                    </Link>
                    <img src={iconBag} alt="icon-bag" />  
                </div>                   
            </div>      
    );
};

export default CardProduct;