'use client';
import React from 'react';
import useMovies from '../hooks/useMovies';
import MoviesList from '../components/MoviesList';


const MoviesPage = () => {
    const { movies, loading, error } = useMovies(1);

    if (loading) return <div className="text-white text-center mt-20 text-2xl">Loading...</div>;
    if (error) return <div className="text-red-500 text-center mt-20 text-2xl">Error: {error.message}</div>;

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-4xl font-bold mb-8 text-center text-yellow-500">Popular Movies</h1>
                <MoviesList movies={movies} />
            </div>
        </div>
    );
};

export default MoviesPage;