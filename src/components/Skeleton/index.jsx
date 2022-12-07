const Skeleton = () => (
	<section>
		<div className='animate-pulse relative mx-auto max-w-screen-xl px-4 py-8'>
			<div className='grid grid-cols-1 items-start gap-8 md:grid-cols-2'>
				<div className='grid grid-cols-2 gap-4 md:grid-cols-1'>
					<div className='flex justify-center items-center shadow-[0_5px_60px_-5px_rgba(0,0,0,0.3)] aspect-square w-full rounded-xl object-cover'>
						<svg className='w-12 h-12 text-gray-200 dark:text-gray-400' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' fill='currentColor' viewBox='0 0 640 512'><path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z'/></svg>
					</div>
					<div className='grid grid-cols-2 gap-4 lg:mt-4'>
						{[1, 2, 3, 4]?.map(index => (
							<>
								{index !== 0 && (
									<div className='flex justify-center items-center shadow-[0_5px_100px_-5px_rgba(0,0,0,0.3)]'>
										<svg className='w-12 h-12 text-gray-200 dark:text-gray-400' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' fill='currentColor' viewBox='0 0 640 512'><path d='M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z'/></svg>
									</div>
								)}
							</>
						))}
					</div>
				</div>

				<div className='sticky top-0'>
					<div className='mt-8 flex justify-center'>
						<div className='max-w-full text-center'>
							<h1 className='capitalize text-center mt-3 text-2xl font-bold'>
								<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4'></div>
							</h1>
						</div>
					</div>
					<div className='mt-5'>
						<legend className='mb-1 text-sm font-medium'>Abilities</legend>
						<div className='flow-root'>
							<div className='gap-4 flex flex-wrap justify-center'>
								{[1, 2, 3, 4].map(index => (
									<div key={index} className='h-[22px] w-[20%] bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4'></div>
								))}

							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>
);

export default Skeleton;
