// rafce
import React from 'react';

const Display = () => {
	const generateRandomNumber = () => {
		return Math.random();
	};

	return <p>{generateRandomNumber()}</p>;
};

export default Display;
