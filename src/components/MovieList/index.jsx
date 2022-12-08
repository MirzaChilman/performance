import useIntersect from '@jackyef/use-intersect';
import {lazy, Suspense, useEffect, useState} from 'react';
import Header from '../Header';
import SkeletonSection from '../SkeletonSection';
import NowPlaying from '../MovieSection/NowPlaying';
import TopRated from '../MovieSection/TopRated';
import Upcoming from '../MovieSection/Upcoming';
import Popular from '../MovieSection/Popular';

const MovieList = () => (
	<div className='h-full dark:bg-gray-800 dark:text-gray-100'>
		<Header/>
		<Suspense fallback={<SkeletonSection/>}>
			<NowPlaying />
		</Suspense>
		<Suspense fallback={<SkeletonSection/>}>
			<Popular/>
		</Suspense>
		<Suspense fallback={<SkeletonSection/>}>
			<TopRated/>
		</Suspense>
		<Suspense fallback={<SkeletonSection/>}>
			<Upcoming/>
		</Suspense>
	</div>
);

export default MovieList;
