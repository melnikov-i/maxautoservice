import styled from 'styled-components';



import {
  LAYOUT_BIG_MAX_WIDTH,
  BIG_SCREEN_MAX
} from '@src/styled';

export const HeadWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: 425px;
`;
  
  // height: 600px;
  // background-image: url(${headBg});
  // --background-size: cover;
  // background-position: center -320px;
  // background-repeat: no-repeat;
// padding: 20px 30px;
// background-color: rgba(180, 180, 180, .4);
// height: 600px;
// font-size: 14px;

export const HeadImg = styled.img`
  width: 100%;
  min-width: 0;
  max-width: 100%;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  @media screen 
    and (max-width: ${ BIG_SCREEN_MAX }) {
      margin-top: -400px;
    }
`;

export const HeadItem = styled.div`
  max-width: ${LAYOUT_BIG_MAX_WIDTH};
`;