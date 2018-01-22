import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import LayoutConnected from '@src/connected/LayoutConnected.usage';

const Root: JSX.Element = (
  <Provider store={ store }>
    <LayoutConnected />
  </Provider>
);

render(
  Root, document.getElementById('app')
);