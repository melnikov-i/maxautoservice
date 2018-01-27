import styled/*, { keyframes }*/ from 'styled-components';

import {
  CarouselItemStyledType,
  CarouselStyledType
} from '@src/interfaces';

import {
  BIG_SCREEN_HEAD_MIN_HEIGHT,
} from '@src/styled';

export const HeadWrapper = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
`;

// const moveToTheLeft = keyframes`
//   0% { margin-left: 0; }
//   100% { margin-left: -100%; }
// `;

export const HeadCarousel = styled.div`
  width: ${
    ( props: CarouselStyledType ) => (
      String(props.carouselWidth * 100)
    )
  }%;
  margin-left: ${
    ( props: CarouselStyledType ) => (
      props.marginLeft
    )
  }%;
  height: ${BIG_SCREEN_HEAD_MIN_HEIGHT};
`;
  // animation-name: ${ moveToTheLeft };
  // animation-duration: 1s;
  // animation-timing-function: linear;
  // animation-delay: ${(props: CarouselStyledType) => props.delay}s;
  // animation-iteration-count: 1;
  // animation-direction: normal;
  // animation-fill-mode: forwards;


export const HeadCarouselItem = styled.div`
  width: ${
    (props: CarouselItemStyledType) => (
      String(100 / props.carouselWidth)
    )
  }%;
  margin: 0;
  display: inline-block;
  vertical-align: top;
  background-image: url(${(props: CarouselItemStyledType) => props.image});
  min-height: ${BIG_SCREEN_HEAD_MIN_HEIGHT};
  background-position: center center;
  background-size: cover;
`;