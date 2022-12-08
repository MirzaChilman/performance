import {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Helmet} from 'react-helmet';
import Header from './components/Header';
const About = lazy(() => import('./components/About'));
const MovieDetail = lazy(() => import('./components/MovieDetail'));
const MovieList = lazy(() => import('./components/MovieList'));
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className='App'>
				<Helmet>
					<link rel='preconnect' href='https://image.tmdb.org' />
					<link rel='dns-preconnect' href='https://image.tmdb.org' />
				</Helmet>
				<Header />
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
		</QueryClientProvider>
	);
}

export default App;
