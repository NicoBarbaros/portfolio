import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About, Contact, Home, Welcome, } from './components';

const Routes = (
	<Router>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route exact path='/about' component={About}/>
			<Route exact path='/contact' component={Contact}/>
			<Route render={function () {
				return <p> 404 Page </p>
			}} />
		</Switch>
  </Router>
);

export default Routes;
