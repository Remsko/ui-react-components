import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import useForm from '../../../hooks/useForm';
import Title, { TitleTheme } from '../../atoms/Title/Title';
import Button, { ButtonType } from '../../atoms/Button/Button';
import Field from '../../molecules/Field/Field';
import styles from './Form.module.css';

const Form = props => {
	const {
		onSubmit,
		errors,
		title,
		fields,
		button,
		className,
		children
	} = props;
	const classMerge = classnames(styles.form, className);

	let initialInputs = {};
	fields.forEach(field => {
		initialInputs[field.name] = '';
	});

	const { inputs, handleInputChange, handleSubmit } = useForm(
		initialInputs,
		onSubmit
	);

	const renderFields = () => {
		return fields.map(({ label, name, type }, index) => {
			return (
				<Field
					key={index}
					className={styles['form__field']}
					input={{
						name: name,
						value: inputs[name],
						onChange: handleInputChange,
						type: type
					}}
					label={label}
					error={errors[name]}
				/>
			);
		});
	};

	return (
		<form className={classMerge} onSubmit={handleSubmit}>
			<Title theme={TitleTheme.DARK} className={styles['form__title']}>
				{title}
			</Title>
			{renderFields()}
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
	onSubmit: PropTypes.func,
	errors: PropTypes.object,
	title: PropTypes.string,
	fields: PropTypes.array,
	button: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.any
};

Form.defaultProps = {
	onSubmit: () => {},
	errors: {},
	title: '',
	fields: [],
	button: '',
	className: '',
	children: ''
};

export default Form;
