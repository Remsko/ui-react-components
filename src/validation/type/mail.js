const errorMessages = {
	empty: 'Email is mandatory !',
	invalid: 'Email format is invalid !'
};

const validationMail = mail => {
	if (!mail || mail === '') {
		return errorMessages.empty;
	}
};

module.exports = { valid: validationMail };
