import React, { useState } from 'react';

const Carusel = ({children, offset}) => {
    return (
        <div className='mainCar_container'>
            <div className="window">
                <div style={{
                    transform: `translateX(${offset}px)`
                }} className="all_item_container">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Carusel;