const MovieCard = ({poster, title, vote, overview}) => (
	<div className='px-3'>
		<div
			className='flex flex-col w-80 h-full rounded-lg shadow-md bg-gray-100 hover:shadow-xl transition-shadow duration-300 ease-in-out'
		>
			<div className='p-1'>
				<img className='w-full rounded-lg object-cover' height={64} width={64} src={`https://image.tmdb.org/t/p/w200${poster}`} alt='Sunset in the mountains' />
			</div>
			<p className='text-xl font-bold p-1'>
				{title}
			</p>
			<p className='p-2 text-left text-gray-700'>
				{overview}
			</p>

		</div>
	</div>
);

export default MovieCard;
