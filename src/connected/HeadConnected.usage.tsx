import * as React from 'react';

import {
  CurrentHeadDataInterface
} from '@src/interfaces';

import { HeadConnected } from '@src/connected';

export default ({head}: {head: CurrentHeadDataInterface}) => (
  <ProfitConnected head={head} />
); 