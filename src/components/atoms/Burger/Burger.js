import React from 'react';
import classnames from 'classnames';

import styles from './Burger.module.css';

export const BurgerCrossClass = styles['burger__cross'];

const Burger = props => {
	const { onClick, className } = props;
	const classMerge = classnames(styles.burger, className);

	return (
		<div className={classMerge} onClick={onClick}>
			<div className={styles['burger__line-1']} />
			<div className={styles['burger__line-2']} />
			<div className={styles['burger__line-3']} />
		</div>
	);
};

export default Burger;
