// import React from 'react';
import { useState } from 'react';
import Display from './components/Display/Display';
import Manipulator from './components/Manipulator/Manipulator';

function App() {
	const [count, setCount] = useState<number>(0);

	// const useState = (initialValue) => {
	// 	let state = initialValue
	// 	const setState = function (value) {
	// 		state = value;
	// 	}
	// 	return [state, setState]
	// }
	// setState(5)

	// let x = {
	// 	y: 1,
	// 	z: 2,
	// };

	// x.y = 3; // mutacja danych!!

	// x = {
	// 	y: 3,
	// 	z: 2,
	// }; // zastąpienie starych danych (nadpisanie!)

	// zasady hooków
	// 1. nazwa zaczyna się od use, useState, useForm, itd.
	// 2. wywołujemy je tylko wewnątrz komponentów funkcyjnych
	// 3. wywołujemy je tylko na top scopie w komponencie

	// props = properties
	// propsy działają tylko w dół
	// const propToPassDown = 5; //do wywalenia

	return (
		<div className="App">
			<Display count={count} />

			<Manipulator setCount={ setCount} />
		</div>
	);
}

export default App;
