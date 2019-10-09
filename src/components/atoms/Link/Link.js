import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NavLink as PureNavLink, Link as PureLink } from 'react-router-dom';

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
		<PureNavLink {...props} className={classMerge}>
			{children}
		</PureNavLink>
	);
};

const Link = props => {
	const { theme, className, children } = props;
	const classMerge = classnames(styles.link, styles[theme], className);

	return (
		<PureLink {...props} className={classMerge}>
			{children}
		</PureLink>
	);
};

Link.propTypes = NavLink.propTypes = {
	theme: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.any
};

Link.defaultProps = NavLink.defaultProps = {
	theme: LinkTheme.DEFAULT,
	className: '',
	children: ''
};

export default Link;
