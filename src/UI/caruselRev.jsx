import React from 'react';

const CaruselRev = ({children, offset}) => {
    return (
        <div className='mContainerRev'>
        <div className="windowRev">
            <div style={{
                transform: `translateX(${offset}px)`
            }} className="sliderMainRev">
                {children}
            </div>
        </div>
    </div>
    );
};

export default CaruselRev;