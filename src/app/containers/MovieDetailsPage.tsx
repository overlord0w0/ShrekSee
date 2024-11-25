'use client';

import React from 'react';
import { useRouter } from 'next/router';
import useMovieDetails from '../hooks/useMovieDetails'; // Імпортуємо хук

const MovieDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query;

    // Перевірка, чи id ще завантажується
    if (!id) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <p>Invalid movie ID or still loading...</p>
            </div>
        );
    }

    // Використання кастомного хука
    const { movie, loading, error } = useMovieDetails(Number(id));

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <p>Loading movie details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-red-500">
                <p>Error: {error.message}</p>
            </div>
        );
    }

    // Перевірка на наявність даних про фільм
    if (!movie) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <p>Movie not found</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="mt-4">{movie.overview}</p>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="mt-8 rounded-lg"
            />
            <p className="mt-4 text-gray-500">Release date: {movie.release_date}</p>
            <p className="mt-2 text-gray-500">Rating: {movie.vote_average}</p>
        </div>
    );
};

export default MovieDetailsPage;