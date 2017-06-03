import React, {Component} from 'react';
import PropTypes from 'prop-types';

import style from '../../assets/stylesheets/base.scss';

class Title extends Component {

	render () {
			const content = this.props

			let subtitleWords = content.words.map((word, index) => <span key={'word-'+index} class={style.subtitleText}>{word}</span>)

			let subtitle = <h2 class={style.subtitle}>{subtitleWords}</h2>

		return (
			<section class={style.mainContainer}>
				<h1 class={style.title}>{content.title}</h1>
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