import {useEffect} from 'react';
import useMovies from '../../hooks/useMovies';
import usePokemons from '../../hooks/usePokemons';
import Header from '../Header';
import PokemonCard from '../PokemonCard';

const PokemonList = () => {
	const {pokemons} = usePokemons();

	return (
		<>
			<Header/>
			<div>
				{pokemons?.map(pokemon => {
					const {name, desc, abilities, sprites, id} = pokemon;
					const spriteImages = Object.values(sprites).filter(sprite => typeof sprite === 'string');
					return (
						<PokemonCard
							key={name}
							id={id}
							name={name}
							desc={desc}
							abilities={abilities}
							sprites={spriteImages} />
					);
				})}
			</div>
		</>
	);
};

export default PokemonList;
