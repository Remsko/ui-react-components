import React from 'react';
import { NavLink as PureNavLink, Link as PureLink } from 'react-router-dom';
import classnames from 'classnames';

import styles from './Link.module.css';

export const LinkTheme = {
	DEFAULT: 'default',
	UNDERLINE: 'underline',
	JUMP: 'jump'
};

export const NavLink = props => {
	const { theme, className, children } = props;
	const classMerge = classnames(styles.link, styles[theme], className);

	return (
		<PureNavLink className={classMerge} {...props}>
			{children}
		</PureNavLink>
	);
};

const Link = props => {
	const { theme, className, children } = props;
	const classMerge = classnames(styles.link, styles[theme], className);

	return (
		<PureLink className={classMerge} {...props}>
			{children}
		</PureLink>
	);
};
export default Link;
