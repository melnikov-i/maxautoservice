import * as React from 'react';

import {
  CurrentHeadDataInterface
} from '@src/interfaces';

import {
  HeadWrapper,
  HeadImg,
  HeadItem
} from '@src/styled';

const headBg = require('@src/images/head-bg');

interface ProfitProps {
  head: CurrentHeadDataInterface,
}

export const Head: React.SFC<ProfitProps> = (props) => {
  const { head } = props;
  console.log(head);
  return (
    <HeadWrapper>
      <HeadImg src={headBg} alt={'Head'} />
      <HeadItem>
        
      </HeadItem>
    </HeadWrapper>
  );
}