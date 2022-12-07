import {useNavigate} from 'react-router-dom';

const LazyPokemonCard = ({id, name, sprites, desc, abilities}) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/detail/${id}`);
	};

	return (
		<div onClick={handleClick} className='max-w-sm rounded overflow-hidden shadow-lg'>
			<div className='flex justify-center'>
				{sprites.slice(0, 3).map(sprite => (
					<div className='h-[64px] w-[64px]' key={sprite + Date.now()}>
						<img className='w-full object-cover' height={64} width={64} src={sprite} alt='Sunset in the mountains' />
					</div>

				))}
			</div>
			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2'>{name}</div>
				<p className='text-gray-700 text-base'>
					{desc}
				</p>
			</div>
			<div className='px-6 pt-4 pb-2'>
				{abilities.map(ability => (
					<span key={ability.ability.name} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
						{ability.ability.name}
					</span>
				))}
			</div>
		</div>
	);
};

export default LazyPokemonCard;
