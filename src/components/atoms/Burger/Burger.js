import React from 'react';
import classnames from 'classnames';

import styles from './Burger.module.css';

const Burger = props => {
	const { isCrossed, onClick, className } = props;
	const classMerge = classnames(
		styles.burger,
		{ [styles['burger__cross']]: isCrossed },
		className
	);

	return (
		<div className={classMerge} onClick={onClick}>
			<div className={styles['burger__line']} />
			<div className={styles['burger__line']} />
			<div className={styles['burger__line']} />
		</div>
	);
};

export default Burger;
