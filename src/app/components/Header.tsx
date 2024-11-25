'use client';  // Це вказує Next.js, що компонент використовує хоки і повинен рендеритись на клієнті.

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { searchMovies } from '../services/apiService';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (searchQuery.length > 2) {
            const fetchMovies = async () => {
                const results = await searchMovies(searchQuery);
                setSearchResults(results.results || []);
            };
            fetchMovies();
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    return (
        <header className="flex items-center justify-between p-4 bg-black text-yellow-500">
            {/* Логотип та назва */}
            <div className="flex items-center space-x-2">
                <Image
                    src="/shrek.png"
                    alt="ShrekSee Logo"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <h1 className="text-4xl font-custom">ShrekSee</h1>
            </div>

            <nav className="flex items-center space-x-8">
                <Link href="/" className="hover:text-white font-custom">Movies</Link>
                <Link href="/genres" className="hover:text-white font-custom">Genres</Link>
            </nav>

            <div className="relative flex items-center space-x-4">
                <div className="flex-1 flex items-center border-b border-yellow-500">
                    <input
                        type="text"
                        placeholder="Search movies..."
                        className="bg-black text-yellow-500 w-full outline-none pl-2"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <span className="text-yellow-500 ml-2">🔍</span>
                </div>

                {/* Випадаючий список результатів */}
                {searchResults.length > 0 && (
                    <ul className="absolute top-full mt-2 w-full bg-black border border-yellow-500 rounded-lg z-10">
                        {searchResults.map((movie) => (
                            <li key={movie.id} className="p-2 hover:bg-yellow-500 hover:text-black">
                                <Link href={`/movie/${movie.id}`}>
                                    {movie.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Аватар і ім'я */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/Group 20.png"
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="text-sm mt-2">Nazar</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
