import { useState, useEffect } from 'react';
import { getMovies } from '../services/apiService';

const useMovies = (page: number = 1) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const data = await getMovies(page);
                setMovies(data.results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [page]);

    return { movies, loading, error };
};

export default useMovies;