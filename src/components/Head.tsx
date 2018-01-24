import * as React from 'react';

import {
  CurrentHeadDataInterface
} from '@src/interfaces';

import {

} from '@src/styled';

interface ProfitProps {
  head: CurrentHeadDataInterface,
}

export const Head: React.SFC<ProfitProps> = (props) => {
  const { head } = props;
  console.log(head);
  return (
    <div></div>
  );
}