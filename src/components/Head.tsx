import * as React from 'react';

import {
  CarouselItemDataInterface
} from '@src/interfaces';

import {
  HeadWrapper,
  HeadCarousel,
  HeadCarouselItem,
  



  // HeadImg,
  // HeadItem
} from '@src/styled';

interface HeadProps {
  CarouselItemData: CarouselItemDataInterface
  makeCarouselItemDataUpdate: 
  ( payload: CarouselItemDataInterface ) => any,
}

export const Head: React.SFC<HeadProps> = (props) => {
  const {
    CarouselItemData,
    makeCarouselItemDataUpdate
  } = props;
  console.log('CarouselItemData:', CarouselItemData);

  const getCarouselItemDataLength = (): number => {
    const slicedImages: CarouselItemDataInterface['images'] = 
      CarouselItemData.images.slice(1);
    const newImages: CarouselItemDataInterface['images'] = [
      ...slicedImages, CarouselItemData.images['0']
    ];
    const newItemData: CarouselItemDataInterface = {
      ...CarouselItemData,
      ['images']: newImages,
    };
    console.log('newItemData:', newItemData);
    makeCarouselItemDataUpdate(newItemData);

    return CarouselItemData.images.length;
  }
  const carouselItemDataLength: number = getCarouselItemDataLength();

  return (
    <HeadWrapper>
      <HeadCarousel
      width={carouselItemDataLength}>
  {
    CarouselItemData.images.map((e, i) => {
      console.log('e - ', i, ':', e);
      return (
        <HeadCarouselItem 
        width={carouselItemDataLength}
        delay={String(Math.imul(i, 10))}
        image={e}
        first={(i === 0) ? true : false}
        margin={'0'}
        key={i}>

        </HeadCarouselItem>
      );
    })
  }
      </HeadCarousel>
    </HeadWrapper>
  );
}
        // <HeadCarouselItem image={test.slide_1}>
          
        // </HeadCarouselItem>
        // <HeadCarouselItem image={slide2}>
          
        // </HeadCarouselItem>