import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import NavBar from './NavBar';

const dummyLogo = (
	<div
		style={{
			color: 'rgb(190, 190, 190)',
			background:
				'linear-gradient(to left, rgb(186, 150, 186), rgb(206, 170, 206))',
			'-webkit-background-clip': 'text',
			'-webkit-text-fill-color': 'transparent',
			textTransform: 'uppercase',
			letterSpacing: '5px',
			fontSize: '20px'
		}}
	>
		<h4>Navigation</h4>
	</div>
);

const dummyLinks = [
	{ title: 'Home', destination: '/home' },
	{ title: 'About', destination: '/about' },
	{ title: 'Work', destination: '/work' },
	{ title: 'Projects', destination: '/projects' }
];

storiesOf('NavBar', module)
	.addDecorator(story => (
		<MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
	))
	.add('defaut', () => <NavBar links={dummyLinks} logo={dummyLogo} />);
