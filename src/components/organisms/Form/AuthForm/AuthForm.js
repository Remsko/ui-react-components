import React, { useState } from 'react';

import Form from '../Form';
import { FieldType } from '../../../molecules/Field/Field';
import { validation, validatorTypes } from '../../../../validation/validation';

const AuthForm = props => {
	const [errors, setErrors] = useState({});
	const config = {
		title: 'Welcome',
		fields: [
			{
				label: 'Email',
				name: validatorTypes.EMAIL,
				type: FieldType.EMAIL
			},
			{
				label: 'Password',
				name: validatorTypes.PASSWORD,
				type: FieldType.PASSWORD
			}
		],
		button: 'Login'
	};

	const submitHandler = inputs => {
		setErrors(validation(inputs));
	};

	return (
		<Form onSubmit={submitHandler} errors={errors} {...config}>
			Don't have account ? Sign up
		</Form>
	);
};

export default AuthForm;
