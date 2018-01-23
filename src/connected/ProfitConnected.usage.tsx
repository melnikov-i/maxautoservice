import * as React from 'react';

import {
  CurrentProfitDataInterface
} from '@src/interfaces';

import { ProfitConnected } from '@src/connected';

export default ({profit}: {profit: CurrentProfitDataInterface}) => (
  <ProfitConnected profit={profit} />
); 