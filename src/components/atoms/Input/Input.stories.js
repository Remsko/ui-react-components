import React from 'react';
import { storiesOf } from '@storybook/react';

import Input, { InputTheme } from './Input';

storiesOf('Input', module)
	.add('default', () => <Input />)
	.add('light', () => <Input theme={InputTheme.LIGHT} />)
	.add('dark', () => <Input theme={InputTheme.DARK} />);
