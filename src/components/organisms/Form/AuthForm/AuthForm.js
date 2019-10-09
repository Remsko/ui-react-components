import React, { useState } from 'react';

import Form from '../Form';
import { FieldType } from '../../../molecules/Field/Field';
import { validation, validatorType } from '../../../../validation/validation';
import Link, { LinkTheme } from '../../../atoms/Link/Link';

const AuthForm = props => {
	const [errors, setErrors] = useState({});
	const config = {
		title: 'Welcome',
		fields: [
			{
				label: 'Email',
				name: validatorType.EMAIL,
				type: FieldType.EMAIL
			},
			{
				label: 'Password',
				name: validatorType.PASSWORD,
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
			Don't have account ?{' '}
			<Link theme={LinkTheme.JUMP} to='/signup'>
				Sign up
			</Link>
		</Form>
	);
};

export default AuthForm;
