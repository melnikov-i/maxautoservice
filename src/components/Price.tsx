import * as React from 'react';

import {} from '@src/interfaces';

import {
  PriceText,
} from '@src/styled';


interface PriceProps {}

export const Price: React.SFC<PriceProps> = (props) => {
  return (
    <div>
      <PriceText>
        {'Price'}
      </PriceText>      
    </div>
  );
};