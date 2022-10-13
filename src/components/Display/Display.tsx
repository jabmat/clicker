import React from 'react';
import { DisplayProps } from '../../helpers/interfaces';

// {
// 	jakisProps: 5,
// 		x: '5',
// 			jakisProps2: 'test'
// }

// sposób 1
// const Display = (props: {
// 	jakisProps: number;
// 	x: string;
// 	jakisProps2: string;
// })

// sposób 2

const Display: React.FC<DisplayProps> = ({ count }) => {
	const generateRandomNumber = () => {
		return Math.random();
	};

	// console.log(propToPassDown);
	return (
		<>
			<p>Random number: {generateRandomNumber()}</p>
			<p>{count}</p>
		</>
	);
};

export default Display;
