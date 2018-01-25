import styled from 'styled-components';

const slide1 = require('@src/images/slide_1');
const slide2 = require('@src/images/slide_2');

import {
  LAYOUT_BIG_MAX_WIDTH,
  BIG_SCREEN_HEAD_MIN_HEIGHT
  // BIG_SCREEN_MAX
} from '@src/styled';

export const HeadWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

export const HeadCarousel = styled.div`
  width: 100%;
  overflow: hidden;
  height: ${BIG_SCREEN_HEAD_MIN_HEIGHT};
`;

export const HeadCarouselItem = styled.div`
  width: 100%;
  display: inline-block;
  vertical-align: top;
  min-height: ${BIG_SCREEN_HEAD_MIN_HEIGHT};
  background-image: url(${
    (props: {item: string}) => {
      switch (props.item) {
        case '1': return slide1;
        case '2': return slide2;
      }
    }
  });
  background-position: center center;
  background-size: cover;
`;
  
export const HeadItem = styled.div`
  max-width: ${LAYOUT_BIG_MAX_WIDTH};
`;

  // height: 600px;
  // background-repeat: no-repeat;
// padding: 20px 30px;
// background-color: rgba(180, 180, 180, .4);
// height: 600px;
// font-size: 14px;

  // min-width: 0;
  // max-width: 100%;
  // margin: 0;
  // width: 100%;


