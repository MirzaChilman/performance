import {useEffect} from 'react';
import useMovies from '../../hooks/useMovies';
import MovieCard from '../MovieCard';

const NowPlaying = () => {
	const {fetchNowPlaying, nowPlayingMovies} = useMovies();
	useEffect(() => {
		fetchNowPlaying();
	}, []);

	if (nowPlayingMovies.length === 0) {
		return 'Loading';
	}

	return (
		<div className='flex flex-col bg-white m-auto p-auto'>
			<h1
				className='flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800'
			>
        Now Playing
			</h1>
			<div
				className='flex overflow-x-scroll pb-10 hide-scroll-bar'
			>
				<div
					className='flex flex-nowrap lg:ml-40 md:ml-20 ml-10 '
				>
					{nowPlayingMovies?.results?.map(result => {
						const {backdrop_path, id, original_title, vote_average, poster_path, overview, tagline} = result;
						console.log({result});
						return (
							<MovieCard key={id} id={id} title={original_title} vote={vote_average} tagline={tagline} poster={backdrop_path} overview={overview} />
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default NowPlaying;
