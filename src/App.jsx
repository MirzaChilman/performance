import {Route, Routes} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<MovieList/>} />
				<Route path='/about' element={<About/>} />
			</Routes>

		</div>
	);
}

export default App;
