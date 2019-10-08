import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import Link, { LinkTheme } from './Link';

storiesOf('Link', module)
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
	))
	.add('default', () => (
		<Link to='' theme={LinkTheme.DEFAULT}>
			Default
		</Link>
	))
	.add('underline', () => (
		<Link to='' theme={LinkTheme.UNDERLINE}>
			Underline
		</Link>
	))
	.add('jump', () => (
		<Link to='' theme={LinkTheme.JUMP}>
			Jump
		</Link>
	));
