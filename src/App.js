import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import view from './components/templates/center/center.module.css';
import AuthForm from './components/organisms/Form/AuthForm/AuthForm';

const App = () => {
	return (
		<BrowserRouter>
			<div className={view.center}>
				<AuthForm />
			</div>
		</BrowserRouter>
	);
};

export default App;
