// pages/movie/[id].tsx
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getMovieById, getGenres } from '../../services/apiService';
import StarsRating from '../../components/StarsRating';

const MovieDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const [movie, setMovie] = useState<any>(null);
    const [genres, setGenres] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const fetchMovieDetails = async () => {
                try {
                    setLoading(true);
                    const movieData = await getMovieById(Number(id));
                    const genresData = await getGenres();
                    setMovie(movieData);
                    setGenres(genresData.genres);
                } catch (err) {
                    setError('Failed to load movie details');
                } finally {
                    setLoading(false);
                }
            };
            fetchMovieDetails();
        }
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const movieGenres = movie?.genre_ids?.map((id: number) => {
        const genre = genres.find((g: any) => g.id === id);
        return genre ? genre.name : null;
    }).filter((genre: string | null) => genre !== null);

    return (
        <div className="min-h-screen p-8 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                    alt={movie?.title}
                    className="w-full h-auto rounded-lg"
                />
                <h1 className="mt-4 text-3xl font-bold text-yellow-500">{movie?.title}</h1>
                <div className="mt-2 text-sm text-gray-400">
                    {movieGenres?.join(', ')}
                </div>
                <div className="mt-2">
                    <StarsRating rating={movie?.vote_average} />
                </div>
                <p className="mt-4 text-lg">{movie?.overview || 'No description available.'}</p>
            </div>
        </div>
    );
};

export default MovieDetailPage;
