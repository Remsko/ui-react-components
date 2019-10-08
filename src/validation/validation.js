const validatorType = {
	EMAIL: 'email',
	PASSWORD: 'password'
};

const validators = {
	[validatorType.EMAIL]: require('./type/mail'),
	[validatorType.PASSWORD]: require('./type/password')
};

const validation = inputs => {
	const errors = {};

	let input;
	for (input in inputs) {
		const error = validators[input].valid(inputs[input]);

		if (error) {
			errors[input] = error;
		}
	}
	return errors;
};

module.exports = { validatorType, validation };
