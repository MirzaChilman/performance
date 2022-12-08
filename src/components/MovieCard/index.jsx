import {useNavigate} from 'react-router-dom';
import {Helmet} from 'react-helmet';
const MovieCard = ({poster, title, vote, overview, id, index}) => {
	const navigate = useNavigate();
	const handleCardClick = () => {
		navigate(`/detail/${id}`);
	};

	return (
		<div className='px-3' onClick={handleCardClick}>
			<Helmet>
				{index === 0 && <link rel='preload' as='image' href={`https://image.tmdb.org/t/p/w200${poster}`} />}
			</Helmet>
			<div
				className='flex flex-col w-80 h-full rounded-lg shadow-md bg-gray-700 hover:shadow-xl transition-shadow duration-300 ease-in-out'
			>
				<div className='p-1'>
					<img loading='lazy' className='w-full rounded-lg object-cover' height={172.6} width={312} src={`https://image.tmdb.org/t/p/w200${poster}`} alt='Sunset in the mountains' />
				</div>
				<p className='text-xl font-bold p-1'>
					{title}
				</p>
				<p className='p-2 text-left text-gray-300'>
					{overview}
				</p>

			</div>
		</div>
	);
};

export default MovieCard;
