import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Input, { InputType } from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import styles from './Field.module.css';

export const FieldType = { ...InputType };

const Field = props => {
	const { input, label, error, className } = props;
	const classMerge = classnames(styles.field, className);
	const classError = classnames(styles['field__error-message'], {
		[styles['field__error-show']]: error
	});

	return (
		<div className={classMerge}>
			<Input className={styles['field__input']} {...input} />
			<Label className={styles['field__label']}>{label}</Label>
			<span className={styles['field__span']} />
			<div className={classError}>{error}</div>
		</div>
	);
};

Field.propTypes = {
	input: PropTypes.object,
	label: PropTypes.string,
	error: PropTypes.string,
	className: PropTypes.string
};

Field.defaultProps = {
	input: {},
	label: '',
	error: '',
	className: ''
};

export default Field;
