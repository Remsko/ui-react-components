import { useState } from 'react';

const useForm = (initialInputs, callback) => {
	const [inputs, setInputs] = useState(initialInputs || {});

	const handleSubmit = event => {
		if (event) {
			event.preventDefault();
		}
		console.log('useForm', inputs);
		if (callback && typeof callback === 'function') {
			callback(inputs);
		}
	};

	const handleInputChange = event => {
		event.persist();
		setInputs(inputs => ({
			...inputs,
			[event.target.name]: event.target.value
		}));
	};

	return {
		handleSubmit,
		handleInputChange,
		inputs
	};
};

export default useForm;
