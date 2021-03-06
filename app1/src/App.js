import React, { Component } from 'react';
import pstyles from './pcsss/app.pcss'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab,far,fas,fal } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)

export const Gadget = () => (
  <div>
    <FontAwesomeIcon icon={['fas','check-square']} />
    Popular gadgets come from vendors like:
    <FontAwesomeIcon icon={['fab', 'apple']} />
    <FontAwesomeIcon icon={['fab', 'microsoft']} />
    <FontAwesomeIcon icon={['fab', 'google']} />
  </div>
)

class App extends Component {
  render() {
    require.ensure(['axios'],function(){
      const _ = require('axios')
      console.log(_)
    },'vendor')
    return (
      <div className={ pstyles.cont }>
      <WingBlank>
      <WhiteSpace />
        <div>几个按钮</div>
        <WhiteSpace />
          <Button>default</Button><WhiteSpace />
          <Button disabled>default disabled</Button><WhiteSpace />
          <Button type='primary'>test button</Button><WhiteSpace />
          <span className={ pstyles.top }>first react demo</span>
          <span className={ pstyles.bottom }>test text</span>
          <Gadget />
        </WingBlank>
      </div>
    );
  }
}

export default App;
