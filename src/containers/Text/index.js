import React, {Component} from "react";
import PropTypes from 'prop-types';

import styles from './styles.scss';

class Text extends Component {

		componentDidMount () {
				if(this.refs.section) {
						let links = this.refs.section.querySelectorAll('a');

						for(let i = 0; i < links.length; i++) {
								links[i].addEventListener('mouseover', this.handleMouseOver);
						}
				}
		}

		handleMouseOver (event) {
				// efectText(event.target)
				// Do something with the text when you hover
		}

		render () {
				const {data} = this.props;

				const dataItems = data.map((element, index) =>
						<div key={index.toString()}>
								{element}
						</div>
				);

				console.log(JSON.stringify(styles))
				return (
						<section ref="section" className={styles.yellow}>
								{dataItems}
						</section>
				)
		}
}

Text.propTypes = {
		data: PropTypes.array.isRequired
}

export default Text;

