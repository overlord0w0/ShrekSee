'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getMovieById } from '../../services/apiService';

const MovieDetailsPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        if (id) {
            getMovieById(Number(id)).then(setMovie);
        }
    }, [id]);

    if (!movie) return <p className="text-white text-center mt-10">Loading...</p>;

    return (
        <div className="p-8 bg-gray-900 text-white min-h-screen">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">
                {/* Постер */}
                <div className="flex-shrink-0">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Інформація про фільм */}
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-yellow-500 mb-4">{movie.title}</h1>

                    {/* Жанри */}
                    <div className="flex gap-2 mb-4">
                        {movie.genres?.map((genre) => (
                            <span
                                key={genre.id}
                                className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium"
                            >
                                {genre.name}
                            </span>
                        ))}
                    </div>

                    {/* Рейтинг */}
                    <p className="text-lg mb-4">
                        <strong>Rating:</strong> {movie.vote_average}/10
                    </p>

                    {/* Дата релізу */}
                    <p className="text-lg mb-4">
                        <strong>Release Date:</strong> {movie.release_date}
                    </p>

                    {/* Опис */}
                    <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsPage;