import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Button.module.css';

export const ButtonType = {
	BUTTON: 'button',
	SUBMIT: 'submit',
	RESET: 'reset'
};

export const ButtonSize = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large'
};

export const ButtonTheme = {
	DEFAULT: 'default',
	LIGHT: 'light',
	DARK: 'dark',
	REVERSED_LIGHT: 'reversed-light',
	REVERSED_DARK: 'reversed-dark'
};

const Button = props => {
	const { type, onClick, disabled, className, children } = props;
	const { size, theme } = props;
	const classMerge = classnames(
		styles.button,
		styles[size],
		styles[theme],
		{ [styles.disabled]: disabled },
		className
	);

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={classMerge}>
			{children}
		</button>
	);
};

Button.propTypes = {
	type: PropTypes.string,
	size: PropTypes.string,
	theme: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.string
};

Button.defaultProps = {
	type: ButtonType.BUTTON,
	size: ButtonSize.MEDIUM,
	theme: ButtonTheme.DEFAULT,
	onClick: () => {},
	disabled: false,
	className: ''
};

export default Button;
