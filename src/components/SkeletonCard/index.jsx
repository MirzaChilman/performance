const SkeletonCard = () => (
	<div className='flex flex-col m-5 rounded shadow-md w-80 sm:w-80 animate-pulse h-96'>
		<div className='h-48 rounded-t dark:bg-gray-700'></div>
		<div className='flex-1 px- py-8 px-4 space-y-4 sm:p-8 dark:bg-gray-900'>
			<div className='w-full h-6 rounded dark:bg-gray-700'></div>
			<div className='w-full h-6 rounded dark:bg-gray-700'></div>
			<div className='w-3/4 h-6 rounded dark:bg-gray-700'></div>
		</div>
	</div>
);

export default SkeletonCard;
