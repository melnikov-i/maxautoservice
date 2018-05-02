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

  let isFirst: CarouselItemDataInterface['isFirst'] = 
    CarouselItemData.isFirst;

  const updateCarouselItemDataWhenToTheLeftMoving = () => {
    const slidesFirstItems: CarouselItemDataInterface['slides'] = 
      CarouselItemData.slides.slice(1);
    const slides: CarouselItemDataInterface['slides'] = [
      ...slidesFirstItems,
      CarouselItemData.slides[1]
    ];
    const payload: CarouselItemDataInterface = {
      ...CarouselItemData,
      ['direction']: false,
      ['isFirst']: false,
      ['slides']: slides,
    };
    return payload;
  };

  const updateCarouselItemDataWhenToTheRightMoving = () => {
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
      ['direction']: true,
      ['isFirst']: false,
      ['slides']: slides,
    };
    return payload;
  };
  
  const updateCarouselIntemData = () => {
    let payload: CarouselItemDataInterface = CarouselItemData;
    if ( CarouselItemData.direction ) {
      payload = updateCarouselItemDataWhenToTheRightMoving();
    } else {
      payload = updateCarouselItemDataWhenToTheLeftMoving();
    }
    setTimeout(() => {
      carouselItemDataUpdate(payload);
    }, CarouselItemData.delay);
  };

  const ToTheLeftMovingHandler = 
  (e: React.MouseEvent<HTMLAnchorElement>) => {
    let max_id = setTimeout(function () {});
    while (max_id--) {
      clearTimeout(max_id);
    }
    let payload: CarouselItemDataInterface = CarouselItemData;
    if ( isFirst ) {
      payload = {
        ...CarouselItemData,
        ['direction']: false,
        ['isFirst']: false,
      };
    } else {
      payload = updateCarouselItemDataWhenToTheLeftMoving();      
    }
    setTimeout(() => {
      carouselItemDataUpdate(payload);
    }, 100);
  };

  const ToTheRightMovingHandler = 
  (e: React.MouseEvent<HTMLAnchorElement>) => {
    let max_id = setTimeout(function () {});
    while (max_id--) {
      clearTimeout(max_id);
    }
    let payload: CarouselItemDataInterface = CarouselItemData;
    if ( isFirst ) {
      payload = {
        ...CarouselItemData,
        ['direction']: true,
        ['isFirst']: false,
      };
    } else {
      payload = updateCarouselItemDataWhenToTheRightMoving();      
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
          isFirst = false;
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
          isFirst = false;
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
        marginLeft={CarouselItemData.marginLeft}
      >
        <HeadCarouselItemForwardAnchor
          onClick={ToTheRightMovingHandler} />
        <HeadCarouselItemBackwardAnchor
          onClick={ToTheLeftMovingHandler}
        />
        {CarouselItemData.slides.map((e, i) => {
          return (
            <HeadCarouselItem 
              carouselWidth={carouselItemDataLength}
              image={e.images}
              key={i}
            >
              <HeadCarouselItemTextBackground>
                <HeadCarouselItemHeader>{ e.header }</HeadCarouselItemHeader>
                <HeadCarouselItemText>{ e.text }</HeadCarouselItemText>
              </HeadCarouselItemTextBackground>
            </HeadCarouselItem>
          );
        })}
      </HeadCarousel>
  );
}