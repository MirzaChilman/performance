import SkeletonCard from '../SkeletonCard';

const SkeletonSection = () => (
	<div className='flex flex-col m-auto p-auto'>
		<h1
			className='flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-200'
		>
			<div className='w-48 h-6 rounded dark:bg-gray-700'/>
		</h1>
		<div
			className='flex overflow-x-scroll pb-10 hide-scroll-bar'
		>
			<div
				className='flex flex-nowrap lg:ml-40 md:ml-20 ml-2'
			>
				{[1, 2].map(idx => (
					<SkeletonCard key={idx}/>
				))}
			</div>
		</div>
	</div>
);

export default SkeletonSection;
