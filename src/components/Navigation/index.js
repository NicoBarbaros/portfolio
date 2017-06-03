import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import style from '../../assets/stylesheets/base.scss';


class Navigation extends Component {
	render () {
		return (
			<nav ref="nav" className={style.nav}>
				<ul>
					<li>
						<NavLink activeClassName={style.active} to='/about' >
							About
						</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName={style.active} to='/work'>
							Work
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName={style.active} to='/contact' >
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Navigation;

