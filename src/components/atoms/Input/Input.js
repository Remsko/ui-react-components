import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Input.module.css';

export const InputType = {
	TEXT: 'text',
	EMAIL: 'email',
	PASSWORD: 'password'
};

export const InputTheme = {
	DEFAULT: 'default',
	LIGHT: 'light',
	DARK: 'dark'
};

const Input = props => {
	const [focus, setFocus] = useState('');
	const { type, value, name, onChange, theme, className } = props;
	const classMerge = classnames(
		styles.input,
		styles[theme],
		className,
		focus
	);

	const onFocusHandler = () => {
		setFocus('focus');
	};

	const onBlurHandler = () => {
		if (value === '') {
			setFocus('');
		}
	};

	return (
		<input
			className={classMerge}
			name={name}
			onFocus={onFocusHandler}
			onBlur={onBlurHandler}
			type={type}
			value={value}
			onChange={onChange}
		/>
	);
};

Input.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	theme: PropTypes.string,
	className: PropTypes.string
};

Input.defaultProps = {
	type: InputType.TEXT,
	name: '',
	value: '',
	onChange: () => {},
	theme: InputTheme.DEFAULT,
	className: ''
};

export default Input;
