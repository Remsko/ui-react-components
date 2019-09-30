import React from 'react';
import { storiesOf } from '@storybook/react';

import Title, { TitleSize, TitleTheme } from './Title';

storiesOf('Title', module)
	.add('default', () => <Title>Default Title</Title>)
	.add('small', () => <Title size={TitleSize.SMALL}>Small Title</Title>)
	.add('medium', () => <Title size={TitleSize.MEDIUM}>Medium Title</Title>)
	.add('large', () => <Title size={TitleSize.LARGE}>Large Title</Title>)
	.add('light', () => <Title theme={TitleTheme.LIGHT}>Light</Title>)
	.add('dark', () => <Title theme={TitleTheme.DARK}>Dark</Title>)
	.add('font-light', () => <Title theme={TitleTheme.WHITE}>White</Title>);
