import React, {Component} from 'react';

import Links from '../Links/index';
import style from './style.css';

import weekday from '../../utils/weekday';
import {footerLinks as links} from '../../utils/data';

class Footer extends Component {


	render () {
		return (
			<div>
			<p>Have a nice {weekday()}</p>
			<Links links={links}/>
			</div>
		)
	}
}

export default Footer

