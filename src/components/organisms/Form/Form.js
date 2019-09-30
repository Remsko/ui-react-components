import React from 'react';
import classnames from 'classnames';

import Title, { TitleTheme, TitleSize } from '../../atoms/Title/Title';
import Button from '../../atoms/Button/Button';
import Field, { FieldType } from '../../molecules/Field/Field';
import styles from './Form.module.css';

export const formBottomText = {
	signIn: {
		query: "Don't have account ?",
		link: 'Sign up',
		button: 'Login'
	},
	signUp: {
		query: 'Already have account ?',
		link: 'Sign in',
		button: 'Submit'
	}
};

const Form = props => {
	const { className } = props;
	const classMerge = classnames(styles.form, className);

	return (
		<form className={classMerge}>
			<Title
				theme={TitleTheme.DARK}
				size={TitleSize.SMALL}
				className={styles['form__title']}
			>
				Welcome
			</Title>
			<Field
				label='Email'
				type={FieldType.EMAIL}
				className={styles['form__field']}
			/>
			<Field
				label='Password'
				type={FieldType.PASSWORD}
				className={styles['form__field']}
			/>
			<Button className={styles['form__button']} disabled>
				{formBottomText.signIn.button}
			</Button>
			<div className={styles['form__bottom-text']}>
				{formBottomText.signIn.query} {formBottomText.signIn.link}
			</div>
		</form>
	);
};

export default Form;
