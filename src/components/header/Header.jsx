import React, { useState, useRef } from 'react';
import './styles/header.scss'
import logo from './icons/Logo.png'
import iconSearch from './icons/icon-search.png'
import iconDelivery from './icons/icon-delivery.png'
import { Link, useNavigate } from 'react-router-dom';
import MenuAccount from './menuAccount/MenuAccount';
import { useSelector } from 'react-redux';
import { MdAccountCircle } from "react-icons/md";
import { animateScroll } from 'react-scroll';
import ShoppingCart from './shoppingCart/ShoppingCart';
import BurgerMenu from './BurgerMenu';
import { MdClose } from "react-icons/md";
import axios from 'axios';


const Header = () => {

    const [searchValue, setSearchValue] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])
    const navigate = useNavigate()
    const userName = useSelector(state => state.userSlice.user)
    const inputRef = useRef(null)
    
    const toTop = () => {
        animateScroll.scrollToTop({
            display: 0,
            duration: 0,
            smooth: true
        })
    }

    const fetchProducts = async () => {
        try {
            const response = await axios('http://localhost:8080/flowers');
            return response.data; 
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
            return [];
        }
    };
    
    const handleSearchChange = async (event) => {
        const value = event.target.value;
        setSearchValue(value);

        const products = await fetchProducts();
        const filtered = products.filter((product) =>{
            if(value === ''){
                return setFilteredProducts([])
            }
            else{
                return product.name.toLowerCase().includes(value.toLowerCase())

            }
        });

        setFilteredProducts(filtered);
    };

    const handleIconClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    const handleClearSearch = () => {
        setSearchValue('');
        setFilteredProducts([]);
    };

    return (
        <header className='header'>
            <div className='header__text'>              
                <p>
                7 DAYS A WEEK | Order by 5 pm For The Next Day Delivery | Delivering within 50 km from Sydney Olympic Park | Free Delivery Over $199 | Free Pick Up Available
                </p> 
            </div>
            <div className="header__container container">
                
                <nav className="header__nav">
                    <Link className='logo' to={"/"} onClick={()=>{toTop()}}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className="main__list">
                        <div className="main__list__search">
                            <label htmlFor="">
                            <input 
                                ref={inputRef} 
                                value={searchValue}
                                onChange={handleSearchChange} 
                                type="text" 
                                placeholder='Search...' />
                                {searchValue ? (
                                     <MdClose onClick={handleClearSearch} className="close-icon"/>
                                ):( <img onClick={handleIconClick} src={iconSearch} alt="logo icon" />)}
                            
                            </label>
                            <div className="dropDown">
                                {filteredProducts.map((item) => (
                                    <div onClick={handleClearSearch} key={item.id} className="dropDown-row">
                                        <Link 
                                        to={`/OneProduct/${item.id}`}>{item.name}
                                       
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                        <Link>SUBSCRIBE & SAVE</Link>
                    </div>
                    <ul className='nav__icon'>
                        <li>
                            <Link>
                                <img src={iconDelivery} alt="icon-delivery" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <MenuAccount/>
                                
                            </Link>
                            
                        </li>
                        <li onClick={() => {
                                navigate('/Cart')
                                toTop()
                            }}>
                            <Link >
                                <ShoppingCart/>
                            </Link>
                        </li>
                        <li>
                            <BurgerMenu/>
                        </li>
                    </ul>
                </nav>

                {userName && 
                <>  
                    <div className="accountUser">
                        <MdAccountCircle />
                        <h2 className="user">{userName.user.name}</h2>
                    </div>                 
                </>
                    }

                <ul className="header__menu">
                    <li><Link>SHOP ALL</Link></li>
                    <li><Link>BY OCCASSION</Link></li>
                    <li><Link>BY CATEGORY</Link></li>
                    <li><Link>BY PRICE</Link></li>
                    <li><Link>SPECIAL</Link></li>
                    <li><Link>FAQ</Link></li>
                    <li><Link>CONTACTS</Link></li>
                </ul>
            </div>            
        </header>
    );
};

export default Header;