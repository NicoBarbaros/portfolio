import React,  {Component} from 'react';
import PropTypes from 'prop-types';

import style from '../../assets/stylesheets/base.scss';

class Banner extends Component {



		getImageSize (event) {
				let imageWidth = event.target.naturalWidth || event.target.offsetWidth;
				let imageHeight = event.target.naturalHeight || event.target.offsetHeight;

				console.log(imageWidth, imageHeight);
		}

		render () {

				let imageCss = {}
				let path = this.props.imageSource

				imageCss.backgroundImage = 'url("' + path + '")'
				imageCss.width = '100%'
				imageCss.height = '100%'
				imageCss.backgroundSize = 'cover'
				imageCss.backgroundPosition = 'center'

				// background-image: url(/api/cache/large___storage___db___portfolio___pages___01 - home___poster.jpg);
				// opacity: 0.5;
				// width: 1692px;
				// height: 1128px;
				// top: 0px;
				// left: -126px;
				// transform: translate3d(0px, 0px, 0px) scale(1.05762);
				// background-size: 1692px 1128px;
				return (
						<figure className={style.banner}>
								<div className={style.image} style={imageCss}>
										<img src={path} onLoad={this.getImageSize} alt='Home Banner' style={{opacity: '0'}}/>
								</div>
						</figure>
				);
		}
}

Banner.propTypes = {
		imageSource: PropTypes.string.isRequired
}

export default Banner;