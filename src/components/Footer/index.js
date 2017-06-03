import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Links from '../Links/index';
import style from './style.css';
import {withRouter} from 'react-router-dom';

import weekDay from '../../utils/weekday';
import {footer as links} from '../../utils/data';
import getUniqueWord from '../../utils/words';

class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render () {
			const { location } = this.props;

			return (
					<footer className={style.footer}>
							{location.pathname === '/' &&
							<p>Enjoy {getUniqueWord()} {weekDay()}</p>
							}
						 <Links links={links}/>
				</footer>
			)
		}
}

//
Footer.propTypes = {
	location: PropTypes.object.isRequired,
}

// withRouter to take the props value of a parent component that has a Route
export default withRouter(Footer);

