import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Title, { TitleTheme } from '../../atoms/Title/Title';
import Button, { ButtonType } from '../../atoms/Button/Button';
import FieldList from '../../molecules/FieldList/FieldList';
import styles from './Form.module.css';

const Form = props => {
	const { submit, title, fields, button, className, children } = props;
	const classMerge = classnames(styles.form, className);

	return (
		<form className={classMerge} onSubmit={submit}>
			<Title theme={TitleTheme.DARK} className={styles['form__title']}>
				{title}
			</Title>
			<FieldList fields={fields} className={styles['form__field']} />
			<Button
				type={ButtonType.SUBMIT}
				disabled={false}
				className={styles['form__button']}
			>
				{button}
			</Button>
			<div className={styles['form__bottom-text']}>{children}</div>
		</form>
	);
};

Form.propTypes = {
	submit: PropTypes.func,
	title: PropTypes.string,
	fields: PropTypes.array,
	button: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.any
};

Form.defaultProps = {
	submit: () => {},
	title: '',
	fields: [],
	button: '',
	className: '',
	children: ''
};

export default Form;
