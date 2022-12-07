import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import PokemonDetail from './components/PokemonDetail';
import PokemonList from './components/PokemonList';

function App() {
	return (
		<div className='App'>

			<Link to='/'>Home</Link>
			<Link to='/detail'>Detail</Link>

			<Routes>
				<Route path='/' element={<PokemonList />} />
				<Route path='/detail' element={<PokemonDetail/>} />
			</Routes>

		</div>
	);
}

export default App;
