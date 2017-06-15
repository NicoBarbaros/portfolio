import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Links from '../Links/index';
import style from '../../assets/stylesheets/base.scss';
import {withRouter} from 'react-router-dom';
import classnames from 'classnames';

import weekDay from '../../utils/weekday';
import {footer as links} from '../../utils/data';
import getUniqueWord from '../../utils/words';

class Footer extends Component {
	constructor (props) {
		super (props);

		this.state = {
			word: 'amazing'
		}
	}

	componentDidMount () {
		this.interval = setInterval(
		 () => this.unique(),
		 5000
		);
	}

	componentWillUnmount () {
		if(this.interval) clearInterval(interval);
	}

	unique () {
		this.setState(() => ({ word: getUniqueWord() }));
	}

	render () {
		const { location } = this.props;

		return (
			<footer className={classnames(style.footer)}>
				<div className={style.mainContainer}>
						{location.pathname === '/' &&
							<div class={classnames(style.text, style.textParagraph)}>
								<p>Enjoy {this.state.word} {weekDay()}</p>
							</div>
						}
					 <Links links={links}/>
				</div>
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

