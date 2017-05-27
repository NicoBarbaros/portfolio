import React, { PureComponent } from 'react';
import Title from './Title/index';
import Text from '../containers/Text/index';

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

    let data = []

    const paragraph1 = <p>Hey, I am Nicholas<br/> Frontend Developer<br/> based in Chisinau Moldova</p>

    const paragraph2 = <p>You are currently <br/> looking at <strong> my site</strong>, <br/> that is awesome.</p>

    const paragraph3 = <p>This site uses React
      <br/>
      and something
      <br/>
      as content manager
      <br/>
      and some other stuff
      <br/>
      <em>react-router, babel, webpack, css-modules JSX es6</em>
    </p>

    const paragraph4 = <p>Pretty cool, right?
      <br/>
      Drop me a line at
      <br/>
      <a href="mailto:nicholas.barbaros@gmail.com?Subject=Cheers" data-text="nicholas.barbaros@gmail.com">nicholas.barbaros@gmail.com</a>
    </p>

    data.push(paragraph1, paragraph2, paragraph3, paragraph4)

    return (
      <div>
        <Title title={title} words={qualities}/>
        <Text data = {data}/>
      </div>
    );
  }
}