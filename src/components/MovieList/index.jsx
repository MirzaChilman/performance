import {useEffect} from 'react';
import useMovies from '../../hooks/useMovies';
import Header from '../Header';
import MovieCard from '../MovieCard';
import NowPlaying from '../MovieSection/NowPlaying';
import Popular from '../MovieSection/Popular';
import TopRated from '../MovieSection/TopRated';
import Upcoming from '../MovieSection/Upcoming';

const MovieList = () => (
	<div className='h-full dark:bg-gray-800 dark:text-gray-100'>
		<Header/>

		<NowPlaying />
		<Popular/>
		<TopRated/>
		<Upcoming/>
	</div>
);

export default MovieList;
