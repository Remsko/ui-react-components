import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Form from './Form';
import AuthForm from './AuthForm/AuthForm';
import { FieldType } from '../../molecules/Field/Field';

const defaultForm = {
	title: 'Default Title',
	fields: [{ label: 'Field label', name: '', type: FieldType.TEXT }],
	button: 'Submit'
};

storiesOf('Form', module)
	.add('default', () => (
		<Form {...defaultForm} onSubmit={action('submit')}>
			Have you got some form ? Create form
		</Form>
	))
	.add('signin', () => <AuthForm />);
