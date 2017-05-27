import React, { Component } from 'react';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { About, Contact, Home, Work, } from '../../components/index';

class Page extends Component {
	render () {
		let pathname = this.props.location.pathname;
		let content = null;

		if(pathname === '/') {
			content = <Home/>
		} else if(pathname === '/about') {
			content = <About/>
		} else if(pathname === '/work') {
				content = <Work/>
		} else if(pathname === '/contact') {
			content = <Contact/>
		}

		return (
			<div>
				<Header/>
				{content}
				<Footer/>
			</div>
		)
	}
}

export default Page;