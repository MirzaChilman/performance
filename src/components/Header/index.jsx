import {Link} from 'react-router-dom';

const links = [
	{to: '/', name: 'Home'},
	{to: '/about', name: 'About'},
];

const Header = () => {
	console.log('MASOK');

	return (
		<div className='bg-black p-3 shadow-2xl'>
			<img className='h-[64px] bg-cover mx-auto' src='https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/03/18/1919380816.png' alt='' />
			<header className='flex justify-evenly gap-2 pt-2'>
				{links.map(link => (
					<nav className='shadow-xl w-full bg-red-600 text-gray-100 rounded-md  p-2' key={link.to}>
						<Link to={link.to}>{link.name}</Link>
					</nav>
				))}
			</header>
		</div>
	);
};

export default Header;
