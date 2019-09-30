import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Form from './components/organisms/Form/Form';
import view from './components/templates/center/center.module.css';

const App = () => {
	return (
		<BrowserRouter>
			<div className={view.center}>
				<Form></Form>
			</div>
		</BrowserRouter>
	);
};

export default App;
