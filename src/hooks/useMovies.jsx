import {useState} from 'react';

const useMovies = () => {
	const [popularMovies, setPopularMovies] = useState([]);
	const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [upcomingMovies, setUpcomingMovies] = useState([]);

	const fetchPopularMovie = async () => {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`);
		const data = await response.json();
		setPopularMovies(data);
	};

	const fetchTopRatedMovie = async () => {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`);
		const data = await response.json();
		setTopRatedMovies(data);
	};

	const fetchNowPlaying = async () => {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`);
		const data = await response.json();
		setNowPlayingMovies(data);
	};

	const fetchUpcomingMovies = async () => {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`);
		const data = await response.json();
		setUpcomingMovies(data);
	};

	return {
		fetchPopularMovie,
		fetchNowPlaying,
		fetchTopRatedMovie,
		fetchUpcomingMovies,
		popularMovies,
		nowPlayingMovies,
		topRatedMovies,
		upcomingMovies,

	};
};

export default useMovies;
