import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Home extends PureComponent {
  active (path) {
    // Returns active when the path is equal to the current location
    if (this.props.location.pathname === path) {
      return 'active';
    }
  }
  
  render () {
    return (
      <div class="main">
        <nav>
          <ul class="nav masthead-nav">
            <li class={this.active('/')}><Link to="/">Home</Link></li>
            <li class={this.active('/')}><Link to="/about">About</Link></li>
            <li class={this.active('/')}><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}