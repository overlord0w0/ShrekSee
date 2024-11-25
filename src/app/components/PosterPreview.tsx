import React from 'react';

const PosterPreview = ({ posterPath, title }) => {
    const imgUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

    return (
        <img
            src={imgUrl}
            alt={title}
            className="w-full h-72 object-cover"
        />
    );
};

export default PosterPreview;