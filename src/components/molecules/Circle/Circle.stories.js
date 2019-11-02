import React from 'react';
import { storiesOf } from '@storybook/react';

import Circle from './Circle';

const dummyList = [
	{
		title: 'Element #1',
		description: 'First element description',
		path: '/'
	},
	{
		title: 'Element #2',
		description: 'Second element description',
		path: '/'
	},
	{
		title: 'Element #3',
		description: 'Third element description',
		path: '/'
	},
	{
		title: 'Element #4',
		description: 'Fourth element description',
		path: '/'
	},
	{
		title: 'Element #5',
		description: 'Fifth element description',
		path: '/'
	},
	{
		title: 'Element #6',
		description: 'Sixth element description',
		path: '/'
	},
	{
		title: 'Element #7',
		description: 'Seventh element description',
		path: '/'
	},
	{
		title: 'Element #8',
		description: 'Eighth element description',
		path: '/'
	},
	{
		title: 'Element #9',
		description: 'Ninth element description',
		path: '/'
	},
	{
		title: 'Element #10',
		description: 'Tenth element description',
		path: '/'
	}
];

storiesOf('Circle', module).add('ten elements', () => (
	<div
		style={{
			display: 'flex',
			flexWrap: 'wrap',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			minHeight: '100vh'
		}}
	>
		<Circle list={dummyList} />
	</div>
));
