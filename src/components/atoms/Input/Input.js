import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';
import classnames from 'classnames';

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
	const [inputValue, setInputValue] = useState('');
	const [focus, setFocus] = useState('');
	const { type, theme, className } = props;
	const classMerge = classnames(
		styles.input,
		styles[theme],
		className,
		focus
	);

	const onChangeHandler = event => {
		setInputValue(event.target.value);
	};

	const onFocusHandler = () => {
		setFocus('focus');
	};

	const onBlurHandler = () => {
		if (inputValue === '') {
			setFocus('');
		}
	};

	return (
		<input
			className={classMerge}
			onFocus={onFocusHandler}
			onBlur={onBlurHandler}
			type={type}
			value={inputValue}
			onChange={onChangeHandler}
		/>
	);
};

Input.propTypes = {
	type: PropTypes.string,
	theme: PropTypes.string,
	className: PropTypes.string
};

Input.defaultProps = {
	type: InputType.TEXT,
	theme: InputTheme.DEFAULT,
	className: ''
};

export default Input;
