import React from 'react';
import "./main.scss"

const Main = () => {
    return (
        
        <main className='main'>
            <section className='main__first-section' >
                <div className="main__container container">
                    <div className="main__box">
                        <p>NEW TREND</p>
                        <h1>COLLUSION</h1>
                        <h4>An exclusive selection on this seasion's trends.</h4>
                        <div className="main__btn-box">
                            <button>DISCOVER</button>
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        
    );
};

export default Main;