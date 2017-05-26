import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import style from './style.css';


class Navigation extends Component {
	render () {
		return (
			<ul className='nav'>
				<li>
					<NavLink exact activeClassName={style.active} to='/'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={style.active} to='/about' >
						About
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName={style.active} to='/contact' >
						Contact
					</NavLink>
				</li>
			</ul>
		)
	}
}

export default Navigation

