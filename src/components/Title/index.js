import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

class Title extends Component {

	render () {
		const content = this.props;
		let subtitle = null;

		subtitle = <h2 className={style.subtitle}><span className={style.subtitleText}>{content.words}</span></h2>

		return (
			<section>
				<h1 className={style.title}><span className={style.titleText}>{content.title}</span></h1>
				{subtitle}
			</section>
		)
	}
}

Title.propTypes = {
	title: PropTypes.string.isRequired,
	words: PropTypes.array.isRequired
}

export default Title;