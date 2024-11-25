'use client';
import React from 'react';
import { useRouter } from 'next/router';
import useMovieDetails from '../hooks/useMovieDetails'; // Імпортуємо хук

const MovieDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query; // Отримуємо ID з URL
    const { movie, loading, error } = useMovieDetails(Number(id)); // Використовуємо хук

    if (loading) return <p className="text-white text-center">Loading...</p>;
    if (error) return <p className="text-red-500 text-center">Error: {error.message}</p>;

    // Перевіряємо чи є дані про фільм
    if (!movie) return <p className="text-white text-center">Movie not found</p>;

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="mt-4">{movie.overview}</p>
            <img
                src={https://image.tmdb.org/t/p/w500${movie.poster_path}}
                    alt={movie.title}
                    className="mt-8 rounded-lg"
                    />
                    </div>
                    );
                };

            export default MovieDetailsPage;