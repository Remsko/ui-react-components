import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Burger from '../../atoms/Burger/Burger';
import { NavLink, LinkTheme } from '../../atoms/Link/Link';
import styles from './NavBar.module.css';

const NavBar = props => {
	const { logo, links, className } = props;
	const [isActive, setIsActive] = useState(false);

	const navbarClasses = classnames(styles.navbar, className);
	// prettier-ignore
	const linksClasses = classnames(
		styles['navbar__links'],
		{ [styles['navbar__active']]: isActive }
	);

	const toggleNavBar = () => {
		setIsActive(!isActive);
	};

	const scaleFadeIn = index => {
		if (isActive) {
			const time = index / 6 + 0.1;
			return `${styles.navLinkFade} 500ms ease forwards ${time}s`;
		}
	};

	const renderLinks = () => (
		<ul className={linksClasses}>
			{links.map(({ title, destination }, index) => (
				<li key={index} style={{ animation: scaleFadeIn(index) }}>
					<NavLink to={destination} theme={LinkTheme.DEFAULT}>
						{title}
					</NavLink>
				</li>
			))}
		</ul>
	);

	return (
		<nav className={navbarClasses}>
			{logo}
			<Burger
				isCrossed={isActive}
				onClick={toggleNavBar}
				className={styles['navbar__burger']}
			/>
			{renderLinks()}
		</nav>
	);
};

NavBar.propTypes = {
	logo: PropTypes.any,
	link: PropTypes.object,
	className: PropTypes.string
};

NavBar.defaultProps = {
	logo: '',
	link: {},
	className: ''
};

export default NavBar;
