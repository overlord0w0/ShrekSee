import React from 'react';

const StarsRating = ({ rating }) => {
    const stars = Math.round(rating / 2);

    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
                <span key={index} className={index < stars ? "text-yellow-500" : "text-gray-500"}>
                    ★
                </span>
            ))}
            <span className="ml-2 text-gray-400">{rating.toFixed(1)}/10</span>
        </div>
    );
};

export default StarsRating;