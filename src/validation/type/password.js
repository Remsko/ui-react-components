const errorMessages = {
	empty: 'Password is mandatory !',
	invalid: 'Password format is invalid !'
};

const validationPassword = password => {
	if (!password || password === '') {
		return errorMessages.empty;
	}
};

module.exports = { valid: validationPassword };
