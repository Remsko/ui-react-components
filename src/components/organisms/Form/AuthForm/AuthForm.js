import React, { useState } from 'react';

import Form from '../Form';
import { FieldType } from '../../../molecules/Field/Field';

const AuthForm = props => {
	const { onAuth } = props;
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmitHandler = event => {
		event.preventDefault();
		if (onAuth && typeof onAuth === 'function') {
			onAuth();
		}
	};

	const config = {
		title: 'Welcome',
		fields: [
			{
				label: 'Email',
				input: {
					type: FieldType.EMAIL,
					value: email,
					onChange: e => setEmail(e.target.value)
				}
			},
			{
				label: 'Password',
				input: {
					type: FieldType.PASSWORD,
					value: password,
					onChange: e => setPassword(e.target.value)
				}
			}
		],
		button: 'Login'
	};

	return (
		<Form submit={onSubmitHandler} {...config}>
			Don't have account ? Sign up
		</Form>
	);
};

export default AuthForm;
