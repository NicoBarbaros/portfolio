import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Page from './containers/Page/index'
const Routes = (
	<Router>
		<Switch>
			<Route exact path='/' component={Page}/>
			<Route exact path='/about' component={Page}/>
			<Route exact path='/work' component={Page}/>
			<Route exact path='/contact' component={Page}/>
			<Route render={function () {
				return <p> 404 Page </p>
			}} />
		</Switch>
  </Router>
);

export default Routes;
