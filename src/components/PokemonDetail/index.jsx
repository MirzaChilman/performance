import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import usePokemon from '../../hooks/usePokemons';

const PokemonDetail = () => {
	const {id} = useParams();
	const {fetchPokemon} = usePokemon();
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		const getPokemon = async () => {
			const result = await fetchPokemon(id);
			setPokemon(result);
		};

		getPokemon();
	}, []);

	const sprites = pokemon?.sprites && Object.values(pokemon.sprites).filter(sprite => typeof sprite === 'string');

	console.log({myPk: pokemon});
	return (
		<section>
			<div className='relative mx-auto max-w-screen-xl px-4 py-8'>
				<div className='grid grid-cols-1 items-start gap-8 md:grid-cols-2'>
					<div className='grid grid-cols-2 gap-4 md:grid-cols-1'>
						<img
							alt='Les Paul'
							src={pokemon?.sprites?.front_default}
							className='shadow-[0_5px_60px_-5px_rgba(0,0,0,0.3)] aspect-square w-full rounded-xl object-cover'
						/>
						<div className='grid grid-cols-2 gap-4 lg:mt-4'>
							{sprites?.map((sprite, index) => (
								<>
									{index !== 0 && (
										<img
											alt='Les Paul'
											src={sprite}
											className='shadow-[0_5px_100px_-5px_rgba(0,0,0,0.3)] aspect-square w-full rounded-xl object-cover'
										/>
									)}

								</>
							))}
						</div>
					</div>

					<div className='sticky top-0'>
						<div className='mt-8 flex justify-center'>
							<div className='max-w-full text-center'>
								<h1 className='capitalize text-center text-2xl font-bold'>
									{pokemon.name}
								</h1>
							</div>
						</div>
						<div className='mt-5'>
							<legend className='mb-1 text-sm font-medium'>Abilities</legend>
							<div className='flow-root'>
								<div className='-m-0.5 flex flex-wrap'>
									{pokemon?.abilities?.map(({ability}) => {
										const {name} = ability;
										return (
											<div key={name} className='flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-blue-700 bg-blue-100 border border-blue-300 '>
												<div className='text-xs font-normal leading-none max-w-full flex-initial'>{name}</div>
											</div>
										);
									})}

								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	);
};

export default PokemonDetail;
