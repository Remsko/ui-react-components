import React from 'react';
import classnames from 'classnames';

import Input, { InputType } from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import styles from './Field.module.css';

export const FieldType = { ...InputType };

const Field = props => {
	const { type, label, className } = props;
	const classMerge = classnames(styles.field, className);

	return (
		<div className={classMerge}>
			<Input className={styles['field__input']} type={type} />
			<Label className={styles['field__label']}>{label}</Label>
			<span className={styles['field__span']} />
		</div>
	);
};

export default Field;
