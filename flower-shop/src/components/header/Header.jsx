import React from 'react';
import './styles/header.scss'
import logo from './icons/Logo.png'
import iconSearch from './icons/icon-search.png'
import iconDelivery from './icons/icon-delivery.png'

// import burgerMenu from './icons/icon-burgerMenu.png'
// import iconMenu from './icons/icon-searchMenu.png'
// import iconMenuAcc from './icons/icon-menuAcc.png'
// import iconMenuLogout from './icons/Icon-logout.png'
import { Link, useNavigate } from 'react-router-dom';
import MenuAccount from './menuAccount/MenuAccount';
import { useSelector } from 'react-redux';
import { MdAccountCircle } from "react-icons/md";
import { animateScroll } from 'react-scroll';
import ShoppingCart from './shoppingCart/ShoppingCart';
import BurgerMenu from './BurgerMenu';


const Header = () => {

    const navigate = useNavigate()
    const userName = useSelector(state => state.userSlice.user)
    
    const toTop = () => {
        animateScroll.scrollToTop({
            display: 0,
            duration: 0,
            smooth: true
        })
    }
    

    return (
        <header className='header'>
            <div className='header__text'>
                <p>
                7 DAYS A WEEK | Order by 5 pm For The Next Day Delivery | Delivering within 50 km from Sydney Olympic Park | Free Delivery Over $199 | Free Pick Up Available
                </p>
                
            </div>
            <div className="header__container container">
               
                {/* <div className="burgerMenu">
                    <div className="close">
                        X
                    </div>
                    <input type="text" placeholder='Search...'/>
                    <img className='iconSearchBurger' src={iconMenu} alt="icon-searchMenu" />
                    <ul>
                        <li>
                            <Link >
                                Shop All
                            </Link>
                        </li>
                        <li>
                            <Link>
                                By Occasion
                            </Link>
                        </li>
                        <li>
                            <Link>
                                By Category
                            </Link>
                        </li>
                        <li>
                            <Link>
                                By Price
                            </Link>
                        </li>
                        <li>
                            <Link>
                                Special
                            </Link>
                        </li>
                        <li>
                            <Link>
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link>
                                Contacts
                            </Link>
                        </li>
                    </ul>
                    <div className="privateOffice">
                        <img src={iconMenuAcc} alt="icon-burgerMenuAcc" />
                        <h4>My account</h4>
                    </div>
                    <div className="privateOffice">
                        <img src={iconMenuLogout} alt="icon-burgerLogout" />
                        <h4>Logout</h4>
                    </div>
                </div> */}
                
               
                
                
                <nav className="header__nav">
                    <Link className='logo' to={"/"} onClick={()=>{toTop()}}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className="main__list">
                        <div className="main__list__search">
                            <input type="text" placeholder='Search...' />
                            <img src={iconSearch} alt="logo icon" />
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
                            {/* <img src={burgerMenu} alt="burger-menu" /> */}
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