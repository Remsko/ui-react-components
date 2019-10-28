import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import view from './components/templates/center/center.module.css';
import AuthForm from './components/organisms/Form/AuthForm/AuthForm';
import NavBar from './components/organisms/NavBar/NavBar';

const App = () => {
	return (
		<BrowserRouter>
			<NavBar
				links={[
					{ title: 'Home', destination: '/home' },
					{ title: 'About', destination: '/about' },
					{ title: 'Work', destination: '/work' },
					{ title: 'Projects', destination: '/projects' }
				]}
			/>
			<div className={view.center}>
				<AuthForm />
			</div>
		</BrowserRouter>
	);
};

export default App;
