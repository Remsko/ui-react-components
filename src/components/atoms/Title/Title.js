import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Title.module.css';

export const TitleSize = {
	BIG: 'big',
	VERY_BIG: 'very-big',
	VERY_VERY_BIG: 'very-very-big'
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
	size: TitleSize.BIG,
	theme: TitleTheme.DEFAULT,
	className: ''
};

export default Title;
