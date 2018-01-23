import * as React from 'react';

import {
  CurrentProfitDataInterface
} from '@src/interfaces';

interface ProfitProps {
  profit: CurrentProfitDataInterface,
}

export const Profit: React.SFC<ProfitProps> = (props) => {
  const { profit } = props;
  console.log(profit);
  return (
    <div>
      
    </div>
  );
}