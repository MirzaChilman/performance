import {useEffect, useState} from 'react';
const usePokemon = () => {
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchPokemons = async page => {
		setLoading(true);
		const displayPerPage = 20;
		const offset = (page - 1) * 20;
		const url = `${process.env.REACT_APP_API}/pokemon?limit=${displayPerPage}&offset=${offset}`;

		const response = await fetch(url);
		const data = await response.json();
		const pokemonList = data.results.map(async pokemon => {
			const pokemonResponse = await fetch(pokemon.url);
			const pokemonData = await pokemonResponse.json();
			return pokemonData;
		});

		// Set pokemonList to state
		setLoading(false);
		setPokemons(await Promise.all(pokemonList));
	};

	const fetchPokemon = async id => {
		const urlPekemon = `${process.env.REACT_APP_API}/pokemon/${id}`;
		const pokemonResult = await fetch(urlPekemon);
		const result = await pokemonResult.json();
		return result;
	};

	useEffect(() => {
		fetchPokemons();
	}, []);

	return {
		pokemons,
		loading,
		fetchPokemon,
	};
};

export default usePokemon;
