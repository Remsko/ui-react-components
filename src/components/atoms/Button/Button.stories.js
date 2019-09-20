import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button, { ButtonSize, ButtonTheme } from './Button';

export const actions = {
	onClick: action('clicked')
};

storiesOf('Button', module)
	.add('default', () => (
		<Button theme={ButtonTheme.DEFAULT} {...actions}>
			Default
		</Button>
	))
	.add('small', () => (
		<Button size={ButtonSize.SMALL} {...actions}>
			Small
		</Button>
	))
	.add('medium', () => (
		<Button size={ButtonSize.MEDIUM} {...actions}>
			Medium
		</Button>
	))
	.add('large', () => (
		<Button size={ButtonSize.LARGE} {...actions}>
			Large
		</Button>
	))
	.add('light', () => (
		<Button theme={ButtonTheme.LIGHT} {...actions}>
			Light
		</Button>
	))
	.add('dark', () => (
		<Button theme={ButtonTheme.DARK} {...actions}>
			Dark
		</Button>
	))
	.add('reversed-light', () => (
		<Button theme={ButtonTheme.REVERSED_LIGHT} {...actions}>
			Reversed Light
		</Button>
	))
	.add('reversed-dark', () => (
		<Button theme={ButtonTheme.REVERSED_DARK} {...actions}>
			Reversed Dark
		</Button>
	))
	.add('disabled', () => (
		<Button disabled {...actions}>
			Disabled
		</Button>
	));
