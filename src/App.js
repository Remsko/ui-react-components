import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Form from './components/organisms/Form/Form';
import { FieldType } from './components/molecules/Field/Field';
import view from './components/templates/center/center.module.css';
import styles from './styles/link.module.css';

const App = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signinForm = {
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

	const onSubmitHandler = e => e.preventDefault();

	return (
		<BrowserRouter>
			<div className={view.center}>
				<Form {...signinForm} submit={onSubmitHandler}>
					Don't have account ?{' '}
					<Link to='/signup' className={styles.link}>
						Sign up
					</Link>
				</Form>
			</div>
		</BrowserRouter>
	);
};

export default App;
