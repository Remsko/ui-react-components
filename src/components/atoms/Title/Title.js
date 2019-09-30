import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Title.module.css';

export const TitleSize = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large'
};

export const TitleTheme = {
	DEFAULT: 'black',
	WHITE: 'white',
	LIGHT: 'light',
	DARK: 'dark'
};

const Title = props => {
	const { children, className, size, theme } = props;
	const classMerge = classnames(
		styles.title,
		styles[size],
		styles[theme],
		className
	);

	return <h1 className={classMerge}>{children}</h1>;
};

Title.propTypes = {
	size: PropTypes.string,
	theme: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.string
};

Title.defaultProps = {
	size: TitleSize.MEDIUM,
	theme: TitleTheme.DEFAULT,
	className: '',
	chidren: ''
};

export default Title;
