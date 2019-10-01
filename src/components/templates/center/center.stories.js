import React from 'react';
import { storiesOf } from '@storybook/react';

import styles from './center.module.css';

const defaultStyle = {
	outline: '1px solid #eee',
	backgroundColor: 'rgba(220, 220, 220, .6)',
	minWidth: '90vw',
	minHeight: '90vh'
};

const centeredBox = {
	outline: '1px solid #fff',
	backgroundColor: 'rgba(250, 250, 250, .6)',
	minWidth: '30px',
	minHeight: '30px'
};

storiesOf('Template', module).add('center', () => (
	<div className={styles.center} style={defaultStyle}>
		<div style={centeredBox} />
	</div>
));
