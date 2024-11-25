import React, { useState, useEffect } from 'react';
import MoviesListCard from './MoviesListCard';
import { getMovies } from '../services/apiService';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMovies(currentPage);
            setMovies(data.results);
            setTotalPages(data.total_pages);
        };
        fetchMovies();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className="min-h-screen p-8 bg-gray-900 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {movies.map(movie => (
                    <MoviesListCard key={movie.id} movie={movie} />
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button
                    className="px-4 py-2 mx-2 bg-yellow-500 text-black rounded"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="px-4 py-2 text-lg">{currentPage}</span>
                <button
                    className="px-4 py-2 mx-2 bg-yellow-500 text-black rounded"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default MoviesList;
