import {useState, useCallback} from 'react';
import Button from './Button';

const About = () => {
	console.log('counter rendered');
	const [countOne, setCountOne] = useState(0);
	const [countTwo, setCountTwo] = useState(0);
	// 0x000aava
	const handleClickOne = useCallback(() => {
		import(/* webpackChunkName: "unique" */'../../helpers/generateUniqueNumber').then(mod => {
			const uniqueCount = mod.generateUniqueNumber(countOne);
			setCountOne(uniqueCount);
		});
	}, [countOne]);
	const handleClickTwo = useCallback(() => setCountTwo(countTwo + 1), [countTwo]);

	return (
		<div className='flex flex-col items-center'>
			<div className='flex'>
				<p className='text-3xl mx-2 my-2 px-5 border-2 border-gray-800'>
					{countOne}
				</p>
				<p className='text-3xl mx-2 my-2 px-5 border-2 border-gray-800'>
					{countTwo}
				</p>
			</div>
			<Button handleClick={handleClickOne} name='button1' />
			<br />
			<Button handleClick={handleClickTwo} name='button2' />
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellendus nihil iusto. Iste iure doloremque culpa temporibus est amet maiores, molestiae quam optio voluptatem labore dicta nam consectetur distinctio consequuntur nostrum nobis rerum possimus assumenda dignissimos, hic magnam repellendus aperiam perspiciatis? Distinctio ex, rem, odit, ratione possimus error saepe libero sed aspernatur odio quidem deserunt. Praesentium sed enim, consequuntur aliquam impedit nobis error mollitia? Velit pariatur perferendis quaerat expedita quam officiis exercitationem architecto quasi, reiciendis voluptatum magnam et quas at corporis laudantium eveniet temporibus, nihil animi aliquam aut aperiam, enim cupiditate repudiandae voluptatibus. Quos sequi cupiditate consectetur. Accusamus, nostrum pariatur!</p>
		</div>
	);
};

export default About;
