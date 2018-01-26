import * as React from 'react';

import {
  CurrentProfitDataInterface
} from '@src/interfaces';

import {
  ProfitItem,
  ProfitItemIcon,
  ProfitItemHeader,
  ProfitItemText,
} from '@src/styled';

interface ProfitProps {
  profit: CurrentProfitDataInterface,
}

export const Profit: React.SFC<ProfitProps> = (props) => {
  const { profit } = props;
  // console.log(profit);
  return (
    <ProfitItem>
      <ProfitItemIcon icon={profit.icon} />
      <ProfitItemHeader>
        {profit.header}
      </ProfitItemHeader>
      <ProfitItemText>
        {profit.text}
      </ProfitItemText>
    </ProfitItem>
  );
}