import {lazy, Suspense, useState} from 'react';
import useIntersect from '@jackyef/use-intersect';
const UpcomingLazy = lazy(() => import('./UpcomingLazy'));

const Upcoming = () => {
	const [load, setLoad] = useState(false);
	const handleIntersect = () => {
		setLoad(true);
	};

	const targetRef = useIntersect(handleIntersect, {}, true);
	return (

		<div ref={targetRef}>
			{load ? (
				<Suspense fallback='loading'>
					<UpcomingLazy/>
				</Suspense>)
				: <div className='h-64'></div>}
		</div>

	);
};

export default Upcoming;
