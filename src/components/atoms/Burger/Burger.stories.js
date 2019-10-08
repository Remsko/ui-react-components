import React from 'react';
import { storiesOf } from '@storybook/react';

import Burger, { BurgerCrossClass } from './Burger';

storiesOf('Burger', module)
	.add('default', () => {
		return <Burger />;
	})
	.add('cross', () => {
		return <Burger className={BurgerCrossClass} />;
	});
