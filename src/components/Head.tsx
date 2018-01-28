import * as React from 'react';

import {
  CarouselItemDataInterface
} from '@src/interfaces';

import {
  HeadCarousel,
  HeadCarouselItem,
  HeadCarouselItemForwardAnchor,
  HeadCarouselItemBackwardAnchor,
  HeadCarouselItemTextBackground,
  HeadCarouselItemHeader,
  HeadCarouselItemText,
} from '@src/styled';

interface HeadProps {
  CarouselItemData: CarouselItemDataInterface
  carouselItemDataUpdate: 
  ( payload: CarouselItemDataInterface ) => any,
}

export const Head: React.SFC<HeadProps> = (props) => {
  const {
    CarouselItemData,
    carouselItemDataUpdate
  } = props;

  const updateCarouselItemDataForForwardMoving = () => {
    const slidesFirstItems: CarouselItemDataInterface['slides'] = 
      CarouselItemData.slides.slice(1);
    const slides: CarouselItemDataInterface['slides'] = [
      ...slidesFirstItems,
      CarouselItemData.slides['1']
    ];
    const payload: CarouselItemDataInterface = {
      ...CarouselItemData,
      ['direction']: true,
      ['isFirst']: false,
      ['slides']: slides,
    };
    return payload;
  };

  const updateCarouselItemDataForBackwardMoving = () => {
    const slidesLastItems: CarouselItemDataInterface['slides'] =
      CarouselItemData.slides.slice(
        0,
        CarouselItemData.slides.length - 1 
      );
    const slides: CarouselItemDataInterface['slides'] = [
      CarouselItemData.slides[CarouselItemData.slides.length - 2],
      ...slidesLastItems
    ];
    const payload: CarouselItemDataInterface = {
      ...CarouselItemData,
      ['direction']: false,
      ['isFirst']: false,
      ['slides']: slides,
    };
    return payload;
  };
  
  const updateCarouselIntemData = () => {
    if ( CarouselItemData.direction ) {
      const payload = updateCarouselItemDataForForwardMoving();
      setTimeout(() => {
        carouselItemDataUpdate(payload);
      }, CarouselItemData.delay);
    } else {
      const payload = updateCarouselItemDataForBackwardMoving();
      setTimeout(() => {
        carouselItemDataUpdate(payload);
      }, CarouselItemData.delay);
    }
  };

  const ForwardMovingHandler = 
  (e: React.MouseEvent<HTMLAnchorElement>) => {
    let max_id = setTimeout(function () {});
    while (max_id--) {
      clearTimeout(max_id);
    }
    let payload: CarouselItemDataInterface = CarouselItemData;
    if ( CarouselItemData.isFirst ) {
      payload = {
        ...CarouselItemData,
        ['direction']: true,
        ['isFirst']: false,
      };
    } else {
      payload = updateCarouselItemDataForForwardMoving();      
    }
    carouselItemDataUpdate(payload);
  };

  const BackwardMovingHandler = 
  (e: React.MouseEvent<HTMLAnchorElement>) => {
    let max_id = setTimeout(function () {});
    while (max_id--) {
      clearTimeout(max_id);
    }
    let payload: CarouselItemDataInterface = CarouselItemData;
    if ( CarouselItemData.isFirst ) {
      console.log('FIRST');
      payload = {
        ...CarouselItemData,
        ['direction']: false,
        ['isFirst']: false,
      };
    } else {
      console.log('LAST');
      payload = updateCarouselItemDataForBackwardMoving();      
    }
    carouselItemDataUpdate(payload);
  };

  const moveSlides = (i: number) => {
    const element = document.getElementById('carousel');
    if ( element !== null ) {
      if ( i === 100 ) element.style.marginLeft = '-100%';
      if ( CarouselItemData.direction ) {
        if ( i < 202 ) {
          setTimeout(() => {
            element.style.marginLeft = '-' + String(i) + '%';
            const k: number = i + 2;
            moveSlides(k);
          }, 20);
        } else {
          updateCarouselIntemData();
        }        
      } else {
        if ( i > -2 ) {
          setTimeout(() => {
            element.style.marginLeft = '-' + String(i) + '%';
            const k: number = i - 2;
            moveSlides(k);
          }, 20);
        } else {
          updateCarouselIntemData();
        }
      }
    }
  };

  const removeMovingHandler = () => {
    document.removeEventListener(
      'DOMContentLoaded',
      removeMovingHandler
    );
    setTimeout(() => {
      moveSlides(100);
    }, CarouselItemData.delay);
  };

  const addMovingHandler = () => {
    if ( document.getElementById('carousel') === null ) {
      document.addEventListener(
        'DOMContentLoaded',
        removeMovingHandler
      );      
    } else {
      moveSlides(100);
    }
  };


  const getCarouselItemDataLength = (): number => {
    addMovingHandler();
    return CarouselItemData.slides.length;
  }
  const carouselItemDataLength: number = getCarouselItemDataLength();

  return (
      <HeadCarousel
      id={'carousel'}
      carouselWidth={carouselItemDataLength}
      delay={CarouselItemData.animationDelay}
      marginLeft={CarouselItemData.marginLeft}>
        <HeadCarouselItemForwardAnchor
        onClick={BackwardMovingHandler} />
        <HeadCarouselItemBackwardAnchor
        onClick={ForwardMovingHandler} />
  {
    CarouselItemData.slides.map((e, i) => {
      return (
        <HeadCarouselItem 
        carouselWidth={carouselItemDataLength}
        image={e.images}
        key={i}>
          <HeadCarouselItemTextBackground>
            <HeadCarouselItemHeader>
              { e.header }
            </HeadCarouselItemHeader>
            <HeadCarouselItemText>
              { e.text }
            </HeadCarouselItemText>
          </HeadCarouselItemTextBackground>
        </HeadCarouselItem>
      );
    })
  }
      </HeadCarousel>
  );
}