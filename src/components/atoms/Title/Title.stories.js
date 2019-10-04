import React from 'react';
import { storiesOf } from '@storybook/react';

import Title, { TitleSize, TitleTheme } from './Title';

storiesOf('Title', module)
	.add('default', () => <Title>Default Title</Title>)
	.add('size', () => {
		return (
			<div>
				<Title size={TitleSize.SMALL}>Small Default</Title>
				<Title size={TitleSize.MEDIUM}>Medium Default</Title>
				<Title size={TitleSize.LARGE}>Large Default</Title>
			</div>
		);
	})

	.add('light', () => {
		return (
			<div>
				<Title size={TitleSize.SMALL} theme={TitleTheme.LIGHT}>
					Small Light
				</Title>
				<Title size={TitleSize.MEDIUM} theme={TitleTheme.LIGHT}>
					Medium Light
				</Title>
				<Title size={TitleSize.LARGE} theme={TitleTheme.LIGHT}>
					Large Light
				</Title>
			</div>
		);
	})
	.add('dark', () => {
		return (
			<div>
				<Title size={TitleSize.SMALL} theme={TitleTheme.DARK}>
					Small Light
				</Title>
				<Title size={TitleSize.MEDIUM} theme={TitleTheme.DARK}>
					Medium Light
				</Title>
				<Title size={TitleSize.LARGE} theme={TitleTheme.DARK}>
					Large Light
				</Title>
			</div>
		);
	})
	.add('font-light', () => {
		return (
			<div style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
				<Title size={TitleSize.SMALL} theme={TitleTheme.WHITE}>
					Small Light
				</Title>
				<Title size={TitleSize.MEDIUM} theme={TitleTheme.WHITE}>
					Medium Light
				</Title>
				<Title size={TitleSize.LARGE} theme={TitleTheme.WHITE}>
					Large Light
				</Title>
			</div>
		);
	});
