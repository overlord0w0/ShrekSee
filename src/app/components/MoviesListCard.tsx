import React from 'react';
import { useRouter } from 'next/router';

const MoviesListCard = ({ movie }: { movie: any }) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/movie/${movie.id}`);
    };

    return (
        <div
            className="cursor-pointer p-4 bg-gray-800 rounded-lg hover:shadow-lg"
            onClick={handleCardClick}
        >
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg"
                    />
                    <h2 className="mt-4 text-lg font-bold text-yellow-500">{movie.title}</h2>
                    </div>
                    );
                };

export default MoviesListCard;