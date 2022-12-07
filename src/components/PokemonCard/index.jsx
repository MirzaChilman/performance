import {useRef} from 'react';
import PokemonLazy from './Lazy';

import {useIntersectionObserver} from 'usehooks-ts';
const PokemonCard = props => {
	const myRef = useRef(null);
	const entry = useIntersectionObserver(myRef, {});

	const isVisible = Boolean(entry?.isIntersecting);

	return (
		<div ref={myRef} >
			{isVisible ? <PokemonLazy {...props}/> : null}
		</div>
	);
};

export default PokemonCard;
