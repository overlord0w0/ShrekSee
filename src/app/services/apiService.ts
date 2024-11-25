const API_KEY = 'a362c3acc252a1c5f6836b38f56c255b';
const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzYyYzNhY2MyNTJhMWM1ZjY4MzZiMzhmNTZjMjU1YiIsIm5iZiI6MTczMjI5Nzc4Ni40NjYzMzIyLCJzdWIiOiI2NzM2MmYzNDdkZmE5NzUxODg2ZTI2ODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GU0Wr094VmhalGzvFLX-ptFV179u5YBC3f6PNKzw3EM';

const headers = {
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
};

// Оновлення функції для підтримки жанрів
export const getMovies = async (page: number = 1, genreId?: number) => {
    let url = `${BASE_URL}/discover/movie?include_adult=false&language=en-US&page=${page}&sort_by=popularity.desc`;
    if (genreId) {
        url += `&with_genres=${genreId}`;
    }

    const res = await fetch(url, { headers });
    return await res.json();
};

export const getGenres = async () => {
    const res = await fetch(`${BASE_URL}/genre/movie/list?language=en-US`, { headers });
    return await res.json();
};

export const searchMovies = async (query: string) => {
    const res = await fetch(`${BASE_URL}/search/movie?query=${query}&language=en-US&page=1`, { headers });
    return await res.json();
};

export const getMovieById = async (id: number) => {
    const res = await fetch(`${BASE_URL}/movie/${id}?language=en-US`, { headers });
    return await res.json();
};
