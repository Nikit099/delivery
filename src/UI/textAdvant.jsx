import React from 'react';

const TextAdvant = ({title, body}) => {
    return (
        <div className="textAdvant ">
            <div className="titleAdText">{title}</div>
            <div className="descAd">
             {body}
            </div>
          </div>
    );
};

export default TextAdvant;