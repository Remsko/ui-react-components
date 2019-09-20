import React from 'react';
import { storiesOf } from '@storybook/react';

import Title, { TitleSize, TitleTheme } from './Title';

storiesOf('Title', module)
	.add('default', () => <Title>Default Title</Title>)
	.add('big', () => <Title size={TitleSize.BIG}>Default Title</Title>)
	.add('very-big', () => (
		<Title size={TitleSize.VERY_BIG}>Default Title</Title>
	))
	.add('very-very-big', () => (
		<Title size={TitleSize.VERY_VERY_BIG}>Default Title</Title>
	))
	.add('light', () => <Title theme={TitleTheme.LIGHT}>Light</Title>)
	.add('dark', () => <Title theme={TitleTheme.DARK}>Dark</Title>)
	.add('font-light', () => <Title theme={TitleTheme.WHITE}>White</Title>);
