import React from 'react';

const rating = (props) => {
    return (
        <div className="stars-outer">
            <div className="stars-inner" style={{width : props.stars}}></div>
        </div>);
}

export default rating;