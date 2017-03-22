import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {

  active (path) {
    // Returns active when the path is equal to the current location
    const location = this.props.location;
    if (location.pathname === path) {
      return 'active';
    }
  }
  render() {
    return (
      <nav>
        <ul class="nav masthead-nav">
          <li class={this.active('/')}><Link to="/">Home</Link></li>
          <li class={this.active('/about')}><Link to="/about">About</Link></li>
          <li class={this.active('/contact')}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    )
  }
}





