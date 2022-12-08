import {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import SkeletonSection from './components/SkeletonSection';

const About = lazy(() => import('./components/About'));
const MovieDetail = lazy(() => import('./components/MovieDetail'));
const MovieList = lazy(() => import('./components/MovieList'));

function App() {
	return (
		<div className='App'>

			<Routes>
				<Route index path='/' element={
					<Suspense fallback={'loading'}>
						<MovieList/>
					</Suspense>} />
				<Route path='/detail/:id' element={
					<Suspense fallback={'loading'}>
						<MovieDetail/>
					</Suspense>} />
				<Route path='/about' element={
					<Suspense fallback={'loading'}>
						<About/>
					</Suspense>} />
			</Routes>

		</div>
	);
}

export default App;
