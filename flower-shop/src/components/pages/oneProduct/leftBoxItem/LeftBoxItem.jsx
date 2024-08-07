import React from 'react';
import './leftBoxItem.scss'


const LeftBoxItem = ({data}) => {
    return (
        <div className='leftBoxItem'>
            <div className="leftImages">
                <img src={data.img} alt="BouguetRose" />
                <img src={data.img} alt="BouguetRose" />
                <img src={data.img} alt="BouguetRose" />
                <img src={data.img} alt="BouguetRose" />
            </div>
            <div className="rightImages">
                <img src={data.img} alt="BouguetRose" />
            </div>          
        </div>
    );
};

export default LeftBoxItem;