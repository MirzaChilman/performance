import {lazy, Suspense, useState} from 'react';
import useIntersect from '@jackyef/use-intersect';
const TopRatedLazy = lazy(() => import('./TopRatedLazy'));

const TopRated = () => {
	const [load, setLoad] = useState(false);
	const handleIntersect = () => {
		setLoad(true);
	};

	const targetRef = useIntersect(handleIntersect, {}, true);
	return (

		<div ref={targetRef}>
			{load ? (
				<Suspense fallback='loading'>
					<TopRatedLazy/>
				</Suspense>)
				: <div className='h-64'></div>}
		</div>

	);
};

export default TopRated;
