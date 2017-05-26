import React, {Component} from 'react';

import style from './style.css';

import weekday from '../../utils/weekday';

class Footer extends Component {
	render () {
		return (
			<div>
			<p>Have a nice {weekday()}</p>
			</div>
		)
	}
}

export default Footer

