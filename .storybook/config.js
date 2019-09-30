import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import './style.css';

const req = require.context('../src', true, /\.stories.js$/);

const loadStories = () => {
	req.keys().forEach(filename => req(filename));
};

addDecorator(withInfo);
configure(loadStories, module);
