import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const useMovie = () => {
	const [movieDetail, setMovieDetail] = useState(null);
	const {id} = useParams();

	const fetchMovieDetial = async () => {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
		const data = await response.json();
		setMovieDetail(data);
	};

	useEffect(() => {
		fetchMovieDetial();
	}, []);

	return {
		fetchMovieDetial, movieDetail,
	};
};

export default useMovie;
