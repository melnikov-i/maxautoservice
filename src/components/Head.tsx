import * as React from 'react';

import {
  CurrentHeadDataInterface
} from '@src/interfaces';

import {
  HeadWrapper,
  HeadCarousel,
  HeadCarouselItem,
  // HeadImg,
  // HeadItem
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
      <HeadCarousel>
        <HeadCarouselItem item={'1'}>
          
        </HeadCarouselItem>
        <HeadCarouselItem item={'2'}>
          
        </HeadCarouselItem>
      </HeadCarousel>
    </HeadWrapper>
  );
}