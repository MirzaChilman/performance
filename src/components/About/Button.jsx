import {memo} from 'react';

const Button = ({handleClick, name}) => {
	console.log(`${name} rendered`);
	return <button className='w-[200px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleClick}>{name}</button>;
};

export default memo(Button);
