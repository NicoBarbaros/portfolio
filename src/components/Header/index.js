import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navigation from '../Navigation/index';
import style from './style.css';

class Header extends Component {

	render() {
		return (
				<header class={style.header}>
					<div class={style.logo}>
						<Link to="/">Nicholas Barbaros</Link>
					</div>
					<Navigation class={style.nav} />
				</header>
		)
	}
}

Header.propTypes = {

};


export default Header;