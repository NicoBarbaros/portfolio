import React, { PureComponent } from 'react';

import Banner from './Banner/index';
import Title from './Title/index';
import Text from '../containers/Text/index';

import { home, homeTitle } from '../utils/data';

const Home = () => (
  <div>
    <Banner/>
    <Title title={homeTitle.title} words={homeTitle.qualities}/>
    <Text data = {home}/>
  </div>
);

export default Home;