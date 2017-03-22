import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Footer extends Component {
  render () {
    return(
      <footer>
        <ul>
          <li>
            Github
          </li>
          <li>
            StackOverflow
          </li>
        </ul>
      </footer>
    )
  }
}
