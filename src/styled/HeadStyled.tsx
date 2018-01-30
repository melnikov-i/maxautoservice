import styled from 'styled-components';

import {
  CarouselItemStyledType,
  CarouselStyledType
} from '@src/interfaces';

import {
  BIG_SCREEN_HEAD_MIN_HEIGHT,
  DARK_GRAY_COLOR,
  YELLOW_COLOR,
  HEAD_HEADER_BG_COLOR,
  CAROUSEL_WIDTH_BIG_MIN,
  BIG_SCREEN_HEAD_MAX_HEIGHT,
} from '@src/styled';

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
  height: ${ BIG_SCREEN_HEAD_MIN_HEIGHT };
  @media screen
    and (min-width: ${ CAROUSEL_WIDTH_BIG_MIN }) {
      height: ${BIG_SCREEN_HEAD_MAX_HEIGHT};
    }
`;

export const HeadCarouselItem = styled.div`
  width: ${
    (props: CarouselItemStyledType) => (
      String(100 / props.carouselWidth)
    )
  }%;
  margin: 0;
  display: inline-block;
  vertical-align: top;
  background-image: url(${
    (props: CarouselItemStyledType) => (
      props.image
    )
  });
  min-height: ${BIG_SCREEN_HEAD_MIN_HEIGHT};
  background-position: center center;
  background-size: cover;
  position: relative;
  @media screen
    and (min-width: ${ CAROUSEL_WIDTH_BIG_MIN }) {
      min-height: ${BIG_SCREEN_HEAD_MAX_HEIGHT};
    }
`;

export const HeadCarouselItemBackwardAnchor = styled.a`
  display: block;
  text-decoration: none;
  position: absolute;
  top: 50%;
  left: 30px;
  z-index: 1;
  background-color: ${ DARK_GRAY_COLOR };
  width: 60px;
  height: 60px;
  margin-top: -30px;
  border-radius: 50%;
  cursor: pointer;
  &::before {
    content: "\\f104";
    font-family: 'FontAwesome';
    display: block;
    margin-left: 18px;
    height: 60px;
    line-height: 58px;
    color: ${ YELLOW_COLOR };
    font-size: 48px;
  }
`;

export const HeadCarouselItemForwardAnchor = styled.a`
  display: block;
  text-decoration: none;
  position: absolute;
  top: 50%;
  right: 30px;
  z-index: 1;
  background-color: ${ DARK_GRAY_COLOR };
  width: 60px;
  height: 60px;
  margin-top: -30px;
  border-radius: 50%;
  cursor: pointer;
  &::before {
    content: "\\f105";
    font-family: 'FontAwesome';
    display: block;
    margin-left: 24px;
    height: 60px;
    line-height: 58px;
    color: ${ YELLOW_COLOR };
    font-size: 48px;
  }
`;

export const HeadCarouselItemTextBackground = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 1;
  padding: 20px;
  background-color: ${ HEAD_HEADER_BG_COLOR };
`;

export const HeadCarouselItemHeader = styled.h2`
  font-size: 32px;
`;

export const HeadCarouselItemText = styled.p`
  font-size: 24px;
  margin-top: 10px;
`;
