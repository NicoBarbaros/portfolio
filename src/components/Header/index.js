import React, { Component } from "react"
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import style from '../../assets/stylesheets/base.scss'

import classnames from 'classnames'
import Navigation from '../Navigation/index'

class Header extends Component {

	render() {
		return (
				<header class={style.header}>
						<div class={style.mainContainer}>
								<div class={style.logoWrapper}>
										<Link to="/" class={classnames(style.logo, style.logoLink)}><span>N</span><span>B</span></Link>
								</div>
							<Navigation class={style.nav} />
						</div>
				</header>
		)
	}
}

Header.propTypes = {

};


export default Header