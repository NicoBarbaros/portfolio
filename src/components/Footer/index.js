import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Links from '../Links/index';
import style from './style.css';

import weekDay from '../../utils/weekday';
import {footerLinks as links} from '../../utils/data';
import getUniquerWord from '../../utils/words';

class Footer extends Component {

	render () {
		return (
			<footer className={style.footer}>
				<p>Enjoy {getUniquerWord()} {weekDay()}</p>
				<Links links={links}/>
			</footer>
		)
	}
}

Footer.protoTypes = {
	links: PropTypes.array.isRequired
}

export default Footer

