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

    if (!movie) return <p>Loading...</p>;

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            {/* Додаткові дані тут */}
        </div>
    );
};

export default MovieDetailsPage;