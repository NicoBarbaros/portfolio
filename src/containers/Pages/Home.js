import React, { PureComponent } from 'react';

import Banner from '../../components//Banner/index';
import Title from '../../components/Title/index';
import Text from '../Text/index';

import { home, homeTitle } from '../../utils/data';

const Home = () => (
  <div>
    <Banner/>
    <Title title={homeTitle.title} words={homeTitle.qualities}/>
    <Text data = {home}/>
  </div>
);

export default Home;