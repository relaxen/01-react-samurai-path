import c from './Header.module.scss';
import React from 'react';
import logo from '../../smile.jpg';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	const {isAuth, login} = props;

	return (
		<header className={c.header}>
			<img className={c.logo} src={logo} alt='logo' />
			{isAuth?login:<NavLink to={'/login'}>Login</NavLink>}
		</header>
	);
};

export default Header;
