import React, { PureComponent } from 'react';

import Text from '../Text/index'
import { contact } from '../../utils/data';

const Contact = () => (
  <section>
    <Text data={contact}/>
  </section>
);

export default Contact;

