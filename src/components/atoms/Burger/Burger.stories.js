import React from 'react';
import { storiesOf } from '@storybook/react';

import Burger from './Burger';

storiesOf('Burger', module)
	.add('default', () => {
		return <Burger />;
	})
	.add('cross', () => {
		return <Burger isCrossed={true} />;
	});
