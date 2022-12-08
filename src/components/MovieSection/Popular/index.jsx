import {lazy, Suspense, useState} from 'react';
import useIntersect from '@jackyef/use-intersect';
const PopularLazy = lazy(() => import('./PopularLazy'));

const Popular = () => {
	const [load, setLoad] = useState(false);
	const handleIntersect = () => {
		setLoad(true);
	};

	const targetRef = useIntersect(handleIntersect, {}, true);
	return (

		<div ref={targetRef}>
			{load ? (
				<Suspense fallback='loading'>
					<PopularLazy/>
				</Suspense>)
				: <div className='h-64'></div>}
		</div>

	);
};

export default Popular;
