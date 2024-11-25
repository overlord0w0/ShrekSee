import React from 'react';
import PosterPreview from './PosterPreview';
import StarsRating from './StarsRating';

const MoviesListCard = ({ movie }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <PosterPreview posterPath={movie.poster_path} title={movie.title} />
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-2 text-yellow-500">{movie.title}</h2>
                <StarsRating rating={movie.vote_average} />
                <p className="text-gray-400 mt-2 line-clamp-3">{movie.overview}</p>
            </div>
        </div>
    );
};

export default MoviesListCard;