import React from 'react';
import { storiesOf } from '@storybook/react';

import Input, { InputTheme } from './Input';

storiesOf('Input', module)
	.add('default', () => <Input />)
	.add('light', () => {
		return (
			<div>
				<Input theme={InputTheme.LIGHT} />
				<div style={{ height: '20px' }} />
				<Input theme={InputTheme.LIGHT} value='with value' />
			</div>
		);
	})
	.add('dark', () => {
		return (
			<div>
				<Input theme={InputTheme.DARK} />
				<div style={{ height: '20px' }} />
				<Input theme={InputTheme.DARK} value='with value' />
			</div>
		);
	});
