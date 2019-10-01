import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Form from './Form';
import AuthForm from './AuthForm/AuthForm';
import { FieldType } from '../../molecules/Field/Field';

export const actions = {
	submit: action('clicked')
};

const defaultForm = {
	title: 'Default Title',
	fields: [
		{
			label: 'Email',
			input: { type: FieldType.EMAIL, value: '', onChange: () => {} }
		},
		{
			label: 'Password',
			input: { type: FieldType.PASSWORD, value: '', onChange: () => {} }
		}
	],
	button: 'Submit'
};

storiesOf('Form', module)
	.add('default', () => (
		<Form {...defaultForm} {...actions}>
			Have you got some form ? Create form
		</Form>
	))
	.add('signin', () => <AuthForm />);
