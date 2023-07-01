import React from 'react';
import RateLike from '../UI/rateLike';
import RateDis from '../UI/rateDis';

const Review = ({name, desc, rating, logo, date}) => {
    

    return (
        <div className='mainBlockRev'>
            <div className="topRev">
                <div className="leftTopRev">
                    <div className="logoRevFon"></div>
                    <div className="logoRev">
                        {logo}
                    </div>
                    <div className="logoRevShape"></div>
                    <div className="nameRateRev">
                        <div className="nameRev">{name}</div>
                        <div className="rateRev">
                            {
                                 rating.map(elem => elem ? <RateLike/> : <RateDis/>)
                            }
                        </div>
                    </div>
                </div>
                <div className="RightTopRev">
                {date}
                </div>
            </div>
            <div className="bottomRev">
            {desc}
            </div>
        </div>
    );
};

export default Review;