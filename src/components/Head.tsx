import * as React from 'react';

import {
  CurrentHeadDataInterface
} from '@src/interfaces';

import {
  HeadWrapper,
  // HeadImg,
  HeadItem
} from '@src/styled';



interface ProfitProps {
  head: CurrentHeadDataInterface,
}

export const Head: React.SFC<ProfitProps> = (props) => {
  const { head } = props;
  console.log(head);
      // <HeadImg src={headBg} alt={'Head'} />
  return (
    <HeadWrapper>
      <HeadItem>
        
      </HeadItem>
    </HeadWrapper>
  );
}