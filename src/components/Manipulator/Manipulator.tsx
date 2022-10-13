// rafce
import React from 'react';
import { ManipulatorProps } from '../../helpers/interfaces';

const Manipulator: React.FC<ManipulatorProps> = ({ setCount }) => {
	const addOne = () => {
		setCount((prevState) => prevState + 1);
	};

	const retractOne = () => {
		setCount((prevState) => prevState - 1);
	};

	return (
		<>
			{/* <button>-</button> */}
			<button onClick={retractOne}>-</button>
			<button onClick={addOne}>+</button>
		</>
	);
};

export default Manipulator;
