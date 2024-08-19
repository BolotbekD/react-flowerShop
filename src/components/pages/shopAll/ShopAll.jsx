import React from 'react';
import './styles/shopAll.scss'
import iconFlower from './icons/icon-flowerDiscount.png'
import Slider from './slider/Slider';
import iconDelivery from './icons/icon-delivery.png'
import iconHeart from './icons/icon-heart.png'
import iconPresent from './icons/icon-present.png'
import iconCook from './icons/icon-cook.png'
import Swipers from './swiper-comment/swiper/Swipers';
import pngwing from './images/pngwing .png'
import pngwing2 from './images/pngwing 2.png'
import imageFlower from './images/image-flowers.png'
import imageAbout from './images/image-aboutUs.png'
import imageAccinsta from './images/image-Instagram.png'
import imageMaskGroup1 from './images/Mask-group(2).png'
import imageMaskGroup2 from './images/Mask-group(3).png'
import imageMaskGroup3 from './images/Mask-group(4).png'
import imageMaskGroup4 from './images/Mask-group(5).png'
import { Link  } from 'react-router-dom';
import CardProduct from './card-product/CardProduct';
import SwiperProductMenu from './swiper-cardProductMenu/SwiperProductMenu';
import { useSelector, useDispatch } from 'react-redux';
import { toggleViewAll, setFilter } from '../../../store/flowersSlice';



const ShopAll = () => {
    
    const dispatch = useDispatch()
    const data = useSelector(state => state.flowersSlice.data)
    const viewAll = useSelector(state => state.flowersSlice.viewAll)
    const displayedData = viewAll ? data : data.slice(0, 8);

    const selectedCategory = useSelector(state => state.flowersSlice.filter)
   

    const handleCategoryClick = (category) => {
        dispatch(setFilter(category))
    }

    const filterFlowers = selectedCategory === 'All Products' 
        ? displayedData 
        : displayedData.filter(item => item.category === selectedCategory)

        
    return (

   
        <>
        <section className='carousel__section'>
            
            <div className="discount">
                <img src={iconFlower} alt="icon-flower" />
                <p><span>TODAY ONLY!</span> Special offer for <span>mothr’s day 20% OFF</span></p>
            </div>
            <Slider/>
            <div className="carousel-navigate">
                <div className="carousel__container container">
                    <ul>
                        <li>
                            <img src={iconDelivery} alt="icon-delivery" />
                            <p>
                                Next day delivery /7 days a week
                            </p>
                        </li>
                        <li>
                            <img src={iconHeart} alt="icon-handcrafted" />
                            <p>
                                Handcrafted chocolate strawberries & bouquets
                            </p>
                        </li>
                        <li>
                            <img src={iconPresent} alt="icon-present" />
                            <p>
                                Free delivery over $199
                            </p>
                        </li>
                        <li>
                            <img src={iconCook} alt="icon-cook" />
                            <p>
                                2 in 1 gourmet arrangements
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section id='allProd' className='product-menu'>
            <div className="product-menu__container container">
                <h1 className='menu-title'>OUR BEST SELLERS</h1>
                <p className='menu-text'>Select a category or go to the section with a convinient filter by product</p>
                <ul className='all-products'>
                    <button 
                        onClick={() => handleCategoryClick('All Products')}
                        className={selectedCategory === 'All Products' ? 'active': ''}>All Products
                    </button>
                    <button 
                        onClick={() => handleCategoryClick('Happy Birthday')}
                        className={selectedCategory === 'Happy Birthday' ? 'active': ''}>Happy Birthday
                    </button>
                    <button 
                        onClick={() => handleCategoryClick('Congratulation')}
                        className={selectedCategory === 'Congratulation' ? 'active': ''}>Congratulation
                    </button>
                    <button 
                        onClick={() => handleCategoryClick('Anniversary')}
                        className={selectedCategory === 'Anniversary' ? 'active': ''}>Anniversary
                    </button>
                    <button 
                        onClick={() => handleCategoryClick('Get Well')}
                        className={selectedCategory === 'Get Well' ? 'active': ''}>Get Well
                    </button>
                </ul>
                <div className="box-CardProduct">
                    {filterFlowers.map((el) => (
                        <CardProduct el={el} key={el.id} />))}
                </div>
                <div className="box-CardProductMenu">
                    <div className="eventBirthday">
                        <div className="titleEvent">
                            <h2>happy birthday</h2>
                            <Link>View all</Link>
                        </div>                  
                        <div className="titleEvent">
                        <SwiperProductMenu products={data.filter(product => product.category === 'Happy Birthday')} />
                        </div>
                    </div>
                    <div className="eventBirthday">
                        <div className="titleEvent">
                            <h2>CONGRATULATION</h2>
                            <Link>View all</Link>
                        </div>                  
                        <div className="titleEvent">
                            <SwiperProductMenu products={data.filter(product => product.category === 'Congratulation')}/>
                        </div>
                    </div>
                    <div className="eventBirthday">
                        <div className="titleEvent">
                            <h2>ANNIVERSARY</h2>
                            <Link>View all</Link>
                        </div>                  
                        <div className="titleEvent">
                            <SwiperProductMenu products={data.filter(product => product.category === 'Anniversary')}/>
                        </div>
                    </div>
                    <div className="eventBirthday">
                        <div className="titleEvent">
                            <h2>GET WELL</h2>
                            <Link>View all</Link>
                        </div>                  
                        <div className="titleEvent">
                            <SwiperProductMenu products={data.filter(product => product.category === 'Get Well')}/>
                        </div>
                    </div>
                </div>
                
               <a href="#allProd">
                    <button className='view-btn' onClick={() => {dispatch(toggleViewAll(true))}}>
                        {viewAll ? 'Show Less' : 'View All'}
                    </button>
               </a>   
               
            </div>
        </section>

        <section className="reviews__box">
            <div className="reviews__box-conteiner container">
                <h1>OUR HAPPY CLIENTS</h1>
                <p>What they say about us</p>
                <Swipers/>
            </div>
        </section>

        <section className='aboutUs'>
            <div className="aboutUs__container container">
                <div className="image-frame">
                    <img className='pental1' src={pngwing} alt="petal" />
                    <img className='pental2' src={pngwing2} alt="petal" />
                    <img className='whiteRoses' src={imageFlower} alt="whiteRoses" />
                    <img className='main-image' src={imageAbout} alt="girl-flower" />
                </div>
                <div className="about-text">
                    <h1>ABOUT US</h1>
                    <p>
                        We are not the only sellers of chocolate dipped strawberries and flowers in Sydney, but we are 
                        probably the only ones who combine the Finest Belgian Chocolate, Strawberries with Fresh Cut 
                        Flowers to bring happiness to you and your loved ones. <br /><br />

                        We will never be below your expectations and will 
                        do our best to stay a part of your memories.
                    </p>
                </div>
            </div>
        </section>

        <section className='discount-info'>
            <div className="dicount-info__container container">
                <div className="box-dicountInfo">
                    <h1>GET DISCOUNT INFO</h1>
                    <p>
                        Subscribe discount newsletter for get notification 
                        about new information discount, etc.
                     </p>
                     <input type="text" placeholder='Enter your email' />
                     <button>SUBSCRIBE</button>
                </div>
            </div>
        </section>

        <section className='follow-instagram'>
            <div className="follow-instagram__container container">
                <h1>Follow us on Instagram</h1>
                <p>
                    To be the first to know about special deals, 
                    new and spare products, discount codes and more
                </p>
                <Link>
                    <img src={imageAccinsta} alt="acc-instagram" />
                </Link>
                <div className="box-images">
                    <div className="left-image"></div>
                    <div className="right-image">
                        <div className="top-image">
                            <img src={imageMaskGroup1} alt="image1" />
                            <img src={imageMaskGroup2} alt="image2" />
                        </div>
                        <div className="down-image">
                            <img src={imageMaskGroup3} alt="image3" />
                            <img src={imageMaskGroup4} alt="image4" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default ShopAll;