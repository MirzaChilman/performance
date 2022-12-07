const PokemonDetail = ({pokemon}) => {
	console.log(pokemon);
	return (
		<section>
			<div className='relative mx-auto max-w-screen-xl px-4 py-8'>
				<div className='grid grid-cols-1 items-start gap-8 md:grid-cols-2'>
					<div className='grid grid-cols-2 gap-4 md:grid-cols-1'>
						<img
							alt='Les Paul'
							src='https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
							className='aspect-square w-full rounded-xl object-cover'
						/>

						<div className='grid grid-cols-2 gap-4 lg:mt-4'>
							<img
								alt='Les Paul'
								src='https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
								className='aspect-square w-full rounded-xl object-cover'
							/>

							<img
								alt='Les Paul'
								src='https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
								className='aspect-square w-full rounded-xl object-cover'
							/>

							<img
								alt='Les Paul'
								src='https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
								className='aspect-square w-full rounded-xl object-cover'
							/>

							<img
								alt='Les Paul'
								src='https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
								className='aspect-square w-full rounded-xl object-cover'
							/>
						</div>
					</div>

					<div className='sticky top-0'>
						<div className='mt-8 flex justify-between'>
							<div className='max-w-full'>
								<h1 className='text-2xl font-bold'>
              Fun Product That Does Something Cool
								</h1>
								<p className='mt-0.5 text-sm'>Highest Rated Product</p>
							</div>

						</div>

						<details className='group relative mt-4'>
							<summary className='block'>
								<div>
									<div className='prose max-w-none group-open:hidden'>
										<p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  veniam dicta beatae eos ex error culpa delectus rem tenetur,
                  architecto quam nesciunt, dolor veritatis nisi minus
                  inventore, rerum at recusandae?
										</p>
									</div>
								</div>
							</summary>

							<div className='prose max-w-none pb-6'>
								<p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              veniam dicta beatae eos ex error culpa delectus rem tenetur,
              architecto quam nesciunt, dolor veritatis nisi minus inventore,
              rerum at recusandae?
								</p>

								<p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              nam sapiente nobis ea veritatis error consequatur nisi
              exercitationem iure laudantium culpa, animi temporibus non! Maxime
              et quisquam amet. A, deserunt!
								</p>
							</div>
						</details>

						<form className='mt-8'>
							<fieldset>
								<legend className='mb-1 text-sm font-medium'>Abilities</legend>

								<div className='flow-root'>
									<div className='-m-0.5 flex flex-wrap'>
										<label htmlFor='color_tt' className='cursor-pointer p-0.5'>
											<input
												type='radio'
												name='color'
												id='color_tt'
												className='peer sr-only'
											/>

											<span
												className='group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white'
											>
                    Texas Tea
											</span>
										</label>

										<label htmlFor='color_fr' className='cursor-pointer p-0.5'>
											<input
												type='radio'
												name='color'
												id='color_fr'
												className='peer sr-only'
											/>

											<span
												className='group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white'
											>
                    Fiesta Red
											</span>
										</label>

										<label htmlFor='color_cb' className='cursor-pointer p-0.5'>
											<input
												type='radio'
												name='color'
												id='color_cb'
												className='peer sr-only'
											/>

											<span
												className='group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white'
											>
                    Cobalt Blue
											</span>
										</label>
									</div>
								</div>
							</fieldset>

						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PokemonDetail;
