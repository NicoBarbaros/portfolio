import React, { PureComponent } from 'react';

import Banner from '../../components//Banner/index';
import Title from '../../components/Title/index';
import Text from '../Text/index';

import style from '../../assets/stylesheets/base.scss';

import { home, homeTitle } from '../../utils/data';

const Home = () => {

  let source = 'https://images.unsplash.com/photo-1489345745021-740d36bbda21?dpr=2&auto=format&fit=crop&w=1500&h=999&q=80&cs=tinysrgb&crop=&bg='

  return (
    <div className={style.pageWrapper}>
      <Banner imageSource={source}/>
      <Title title={homeTitle.title} words={homeTitle.qualities}/>
      <Text data={home}/>
    </div>
  );
}
export default Home;