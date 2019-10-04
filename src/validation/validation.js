const validators = {
	email: require('./type/mail'),
	password: require('./type/password')
};

const validatorTypes = {
	EMAIL: 'email',
	PASSWORD: 'password'
};

const validation = inputs => {
	let errors = {};

	console.log('validation', inputs);
	for (let i in inputs) {
		const error = validators[i].valid(inputs[i]);

		if (error) {
			errors[i] = error;
		}
	}
	return errors;
};

module.exports = { validatorTypes, validation };
