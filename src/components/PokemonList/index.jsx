import usePokemons from '../../hooks/usePokemons';
import PokemonCard from '../PokemonCard';

const PokemonList = () => {
	const {pokemons} = usePokemons();

	return (
		<div>
			{pokemons?.map(pokemon => {
				const {name, desc, abilities, sprites} = pokemon;
				const spriteImages = Object.values(sprites).filter(sprite => typeof sprite === 'string');
				return (
					<PokemonCard
						key={name}
						name={name}
						desc={desc}
						abilities={abilities}
						sprites={spriteImages} />
				);
			})}
		</div>
	);
};

export default PokemonList;
