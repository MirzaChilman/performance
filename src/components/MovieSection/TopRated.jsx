import {useEffect} from 'react';
import useMovies from '../../hooks/useMovies';
import MovieCard from '../MovieCard';

const TopRated = () => {
	const {fetchTopRatedMovie, topRatedMovies} = useMovies();
	useEffect(() => {
		fetchTopRatedMovie();
	}, []);

	return (
		<div className='flex flex-col m-auto p-auto'>
			<h1
				className='flex lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-200'
			>
        Top Rated
			</h1>
			<div
				className='flex overflow-x-scroll pb-10 hide-scroll-bar'
			>
				<div
					className='flex flex-nowrap lg:ml-40 md:ml-20 ml-2'
				>
					{topRatedMovies?.results?.map(result => {
						const {backdrop_path, id, original_title, vote_average, poster_path, overview} = result;
						return (
							<MovieCard key={id} title={original_title} vote={vote_average} poster={backdrop_path} overview={overview} />
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default TopRated;
