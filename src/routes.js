import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About, Contact, Home, Welcome, } from './components';
import Header from './components/Header/index';
import Footer from './components/Footer/index';

const Routes = (
	<Router>
		<div className='container'>
			<Header/>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path='/about' component={About}/>
				<Route exact path='/contact' component={Contact}/>
				<Route render={function () {
					return <p> 404 Page </p>
				}} />
			</Switch>
			<Footer/>
		</div>
  </Router>
);

export default Routes;
