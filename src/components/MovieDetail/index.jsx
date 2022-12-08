import useMovie from '../../hooks/useMovie';
import {Helmet} from 'react-helmet';
const MovieDetail = () => {
	const {movieDetail} = useMovie();
	if (!movieDetail) {
		return null;
	}

	return (
		<section className='dark:bg-gray-800 dark:text-gray-100'>
			<Helmet>
				<link rel='preload' as='image' href={`https://image.tmdb.org/t/p/w300${movieDetail.poster_path}`} />
			</Helmet>
			<div className='container max-w-xl p-6 py-8 mx-auto space-y-8 lg:px-8 lg:max-w-7xl'>
				<div>
					<h2 className='text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50'>{movieDetail.original_title}</h2>
					<p className='max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400'>{movieDetail.tagline}</p>
				</div>
				<div className='grid lg:gap-8 lg:grid-cols-2 lg:items-center'>
					<div aria-hidden='true' className='mb-4 lg:mt-0'>
						<img height={468} width={312} src={`https://image.tmdb.org/t/p/w300${movieDetail.poster_path}`} alt='' className='mx-auto rounded-lg shadow-lg dark:bg-gray-500' />
					</div>
					<div>
						<div className='flex gap-2 mt-2 mb-3'>
							{movieDetail?.genres?.map(genre => (
								<span key={genre.id} className='rounded-3xl bg-gray-500 px-2'><p>{genre.name}</p></span>
							))}
						</div>
						<p className='mt-3 text-lg dark:text-gray-400'>{movieDetail.overview}</p>
						<div className='mt-12 space-y-12'>
							{movieDetail.production_companies.map(company => (
								<div className='flex flex-col items-center' key={company.id}>
									<div className='mb-4'>
										<h4 className='text-lg font-medium leading-6 dark:text-gray-50'>{company.name}</h4>
									</div>
									<div className='flex-shrink-0'>
										<div className='flex items-center justify-center w-24 h-24 rounded-md dark:bg-violet-400 dark:text-gray-900'>
											<img height={98} width={98} className='object-contain' src={`https://image.tmdb.org/t/p/w200${company.logo_path}`} alt='' />
										</div>
									</div>

								</div>
							))}

						</div>
					</div>
				</div>

			</div>
		</section>
	);
};

export default MovieDetail;
