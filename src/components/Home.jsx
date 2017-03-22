import React, { PureComponent } from 'react';
import Navigation  from './layout/Navigation';
import Footer from './layout/Footer';

export default class Home extends PureComponent {

  render () {
    const { location } = this.props;

    return (
      <div class="main">
        <Navigation location={location}/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}