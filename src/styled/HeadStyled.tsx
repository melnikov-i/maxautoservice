import styled, { keyframes } from 'styled-components';

import {
  CarouselItemStyleType,
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

const moveToTheLeft = keyframes`
  0% { margin-left: 0; }
  100% { margin-left: -50%; }
`;

export const HeadCarousel = styled.div`
  width: ${
    (props: CarouselStyledType) => (
      String(props.width * 100)
    )
  }%;

  height: ${BIG_SCREEN_HEAD_MIN_HEIGHT};
`;

export const HeadCarouselItem = styled.div`
  width: ${
    (props: CarouselItemStyleType) => (
      String(100 / props.width)
    )
  }%;
  display: inline-block;
  vertical-align: top;
  background-image: url(${(props: CarouselItemStyleType) => props.image});
  min-height: ${BIG_SCREEN_HEAD_MIN_HEIGHT};
  background-position: center center;
  background-size: cover;
  animation-name: ${ moveToTheLeft };
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-delay: ${(props: CarouselItemStyleType) => props.delay}s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: forwards;
`;