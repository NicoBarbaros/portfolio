import React, { PureComponent } from 'react';
import { Link } from 'react-router';

import TweenMax from 'gsap/src/minified/TweenMax.min.js'

export default class Welcome extends PureComponent {
  render () {
    return (
      <div>
        <h1> Hey my name is Nicu</h1>
        <p> I come from Moldova</p>
      </div>
    );
  }
}