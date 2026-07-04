const API_KEY = "82991fcc4b2bf4ab76b2d1a2d0e4cb25"; // Yes this is wrong, yes I am doing it anyway.
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
	const response = await fetch(
		`${BASE_URL}/movie/popular?api_key=${API_KEY}`,
	);
	const data = await response.json();
	return data.results;
};

export const searchMovies = async (query) => {
	const response = await fetch(
		`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
	);
	const data = await response.json();
	return data.results;
};
