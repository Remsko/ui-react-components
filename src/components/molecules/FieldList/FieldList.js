import React from 'react';
import PropTypes from 'prop-types';

import Field from '../Field/Field';

const FieldList = props => {
	const { fields, className } = props;

	if (!fields || fields.length < 1) {
		return 'No field provided !';
	}

	return fields.map(({ input, label }, index) => {
		return (
			<Field
				key={index}
				className={className}
				input={{ ...input }}
				label={label}
			/>
		);
	});
};

FieldList.propTypes = {
	fields: PropTypes.array,
	className: PropTypes.string
};

FieldList.default = {
	fields: [],
	className: ''
};

export default FieldList;
