import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
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

            <div className="flex items-center space-x-4">
                <div className="flex-1 flex items-center border-b border-yellow-500">
                    <input
                        type="text"
                        placeholder="Search movies..."
                        className="bg-black text-yellow-500 w-full outline-none pl-2"
                    />
                    <span className="text-yellow-500 ml-2">🔍</span>
                </div>

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