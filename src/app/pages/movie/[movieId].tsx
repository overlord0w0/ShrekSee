// pages/movie/[movieId].tsx
import React from 'react';
import { useRouter } from 'next/router';
import useMovieDetails from '@/hooks/useMovieDetails';

const MovieDetailsPage = () => {
    const router = useRouter();
    const { movieId } = router.query;

    // Використовуємо хук для отримання даних
    const { movie, loading, error } = useMovieDetails(Number(movieId));

    if (error) return <div>Error: {error.message}</div>;
    if (loading) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{movie.title}</h1>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="mt-4 rounded-lg"
            />
            <p className="mt-4">{movie.overview}</p>
            <p className="mt-2 text-gray-500">Release date: {movie.release_date}</p>
            <p className="mt-2 text-gray-500">Rating: {movie.vote_average}</p>
        </div>
    );
};

export default MovieDetailsPage;
