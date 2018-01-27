import * as React from 'react';

import {
  CarouselItemDataInterface
} from '@src/interfaces';

import {
  // HeadWrapper,
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

  const updateCarouselIntemData = () => {
    const slicedImages: CarouselItemDataInterface['images'] = 
      CarouselItemData.images.slice(1);
    const newImages: CarouselItemDataInterface['images'] = [
      ...slicedImages,
      CarouselItemData.images[CarouselItemData.images.length] = CarouselItemData.images['0']
    ];
    const newItemData: CarouselItemDataInterface = {
      ...CarouselItemData,
      ['images']: newImages,
    };
    console.log('newItemData:', newItemData);
    makeCarouselItemDataUpdate(newItemData);
  };

  const moveSlides = (i: number) => {
    // console.log('i =', i);
    const element = document.getElementById('carousel');
    // console.log('element:', element);
    if ( element !== null ) {
      if ( i < 202 ) {
        setTimeout(() => {
          element.style.marginLeft = '-' + String(i) + '%';
          const k: number = i + 2;
          moveSlides(k);
        }, 20);
      } else {
        // element.style.marginLeft = '0';
        updateCarouselIntemData();
      }
    }
  };

  const removeMovingHandler = () => {
    console.log('bbbbb!!!!');
    document.removeEventListener('DOMContentLoaded', removeMovingHandler);
    setTimeout(() => {
      console.log('Move');
      moveSlides(100);
    }, 3000);
  };

  const addMovingHandler = () => {
    console.log('aaaaa!!!!');
    if ( document.getElementById('carousel') === null ) {
      document.addEventListener('DOMContentLoaded', removeMovingHandler);      
    } else {
      setTimeout(() => {
        console.log('Move');
        moveSlides(100);
      }, 3000);
    }
  };

  const getCarouselItemDataLength = (): number => {
    addMovingHandler();
    return CarouselItemData.images.length;
  }
  const carouselItemDataLength: number = getCarouselItemDataLength();

  return (
      <HeadCarousel
      id={'carousel'}
      carouselWidth={carouselItemDataLength}
      delay={CarouselItemData.animationDelay}
      marginLeft={CarouselItemData.marginLeft}>
  {
    CarouselItemData.images.map((e, i) => {
      console.log('e - ', i, ':', e);
      return (
        <HeadCarouselItem 
        carouselWidth={carouselItemDataLength}
        image={e}
        key={i}>

        </HeadCarouselItem>
      );
    })
  }
      </HeadCarousel>
  );
}