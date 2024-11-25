'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getMovies } from '../../services/apiService';

const GenreMoviesPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const [movies, setMovies] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const fetchMoviesByGenre = async () => {
                try {
                    setLoading(true);
                    const response = await getMovies(1, id);
                    setMovies(response.results);
                } catch (err) {
                    setError('Failed to load movies');
                } finally {
                    setLoading(false);
                }
            };
            fetchMoviesByGenre();
        }
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="min-h-screen p-8 bg-gray-900 text-white">
            <h1 className="text-3xl font-bold text-yellow-500">Movies by Genre</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
                {movies.map((movie) => (
                    <div key={movie.id} className="cursor-pointer p-4 bg-gray-800 rounded-lg hover:shadow-lg">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="rounded-lg"
                        />
                        <h2 className="mt-4 text-lg font-bold text-yellow-500">{movie.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GenreMoviesPage;
