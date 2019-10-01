import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Label.module.css';

export const LabelTheme = {
	DEFAULT: 'default'
};

const Label = props => {
	const { theme, className, children } = props;
	const classMerge = classnames(styles[theme], className);

	return <label className={classMerge}>{children}</label>;
};

Label.propTypes = {
	theme: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.string
};

Label.defaultProps = {
	theme: LabelTheme.DEFAULT,
	className: '',
	children: ''
};

export default Label;
