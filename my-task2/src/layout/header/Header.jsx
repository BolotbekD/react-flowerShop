import React from 'react';
import "./header.scss"
import { Link } from 'react-router-dom';
import searchLogo from './image/search.svg'


const Header = () => {
    return (
        
        <header className='header'>
            <div className="header__container container">
                <nav className="header__box">
                    <h1 className='header__logo'>YOUR LOGO</h1>
                    <ul className="header__list">
                        <li className="header__list-item"><Link to="/">HOME</Link></li>
                        <li className="header__list-item"><Link to="/shop">SHOP</Link></li>
                        <li className="header__list-item"><Link to="/lookbook">LOOKBOOK</Link></li>
                        <li className="header__list-item"><Link to="/features">FEATURES</Link></li>
                        <li className="header__list-item"><Link to="/pages">PAGES</Link></li>
                        <li className="header__list-item"><Link to="/block">BLOCK</Link></li>
                    </ul>
                    <ul className="header__list-right">
                        <Link><img src={searchLogo} alt="" /></Link>
                    </ul>
                </nav>
            </div>  
        </header>
       
    );
};

export default Header;