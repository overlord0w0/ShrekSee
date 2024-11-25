'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import StarsRating from './StarsRating'; // Імпортуємо компонент для зірочок

const MoviesListCard = ({ movie, genres }: { movie: any, genres: any[] }) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push(`/movie/${movie.id}`);
    };

    const movieGenres = movie.genre_ids?.map((id: number) => {
        const genre = genres?.find((g: any) => g.id === id);
        return genre ? genre.name : null;
    }).filter((genre: string | null) => genre !== null);

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

            <div className="mt-2 text-sm text-gray-400">
                {movieGenres?.join(', ')}
            </div>
            <div className="mt-1">
                <StarsRating rating={movie.vote_average} />
            </div>

        </div>
    );
};

export default MoviesListCard;
