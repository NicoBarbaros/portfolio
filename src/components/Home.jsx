import React, { PureComponent } from 'react';
import Title from './Title/index';

export default class Home extends PureComponent {


  render () {
    const title = "Nicholas Barbaros";
    const qualities = [
      'Developer',
      'Frontend',
      'Traveler',
      'Tea lover',
      'Cocoa lover',
      'Books lover',
      'Adventurer'
    ];

    return (
      <div>
        <Title title={title} words={qualities}/>
      </div>
    );
  }
}