import { useState, useEffect } from 'react';
import { getMovieById } from '../services/apiService';

const useMovieDetails = (id: number) => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                setLoading(true);
                const data = await getMovieById(id);
                setMovie(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    return { movie, loading, error };
};

export default useMovieDetails;