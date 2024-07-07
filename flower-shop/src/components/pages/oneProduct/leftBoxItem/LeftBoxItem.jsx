import React from 'react';
import './leftBoxItem.scss'
import imageBouguetRose from './image-leftBox.png'


const LeftBoxItem = () => {
    return (
        <div className='leftBoxItem'>
            <div className="leftImages">
                <img src={imageBouguetRose} alt="BouguetRose" />
                <img src={imageBouguetRose} alt="BouguetRose" />
                <img src={imageBouguetRose} alt="BouguetRose" />
                <img src={imageBouguetRose} alt="BouguetRose" />
            </div>
            <div className="rightImages">
                <img src={imageBouguetRose} alt="BouguetRose" />
            </div>          
        </div>
    );
};

export default LeftBoxItem;