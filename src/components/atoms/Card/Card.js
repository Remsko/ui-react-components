import React from 'react';
import classnames from 'classnames';

import styles from './Card.module.css';

const Card = props => {
	const { children, className } = props;
	const classMerge = classnames(styles.card, className);

	return <div className={classMerge}>{children}</div>;
};

export default Card;
