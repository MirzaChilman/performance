import {useQuery} from '@tanstack/react-query';

const useNowPlaying = () => {
	const {data, isLoading, isError} = useQuery(['nowPlaying'], () => fetch(`${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
		.then(res => res.json()).then(res => res));

	return {
		data,
		isLoading: !data && isLoading,
		isError,
	};
};

export default useNowPlaying;
