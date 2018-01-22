import styled from 'styled-components';

import {
  LAYOUT_BIG_MAX_WIDTH
} from '@src/styled';

const Logo = require('@src/images/Logo');

export const LayoutWrapper = styled.div`
  width: 100%;
`;

export const LayoutTop = styled.div`
  box-sizing: border-box;
  max-width: ${LAYOUT_BIG_MAX_WIDTH};
  width: 100%;
  margin: 0 auto;
  height: 80px;
  padding: 10px 20px;

`;


export const LayoutTopLogo = styled.div`
  width: 50%;
  height: 60px;
  display: inline-block;
  vertical-align: top;
  
`;
// background-color: rgba(0, 255, 0, .4);

export const LayoutTopLogoName = styled.p`
  font-size: 32px;
  font-weight: 700;
  color: #000;
  &::before {
    content: "";
    display: inline-block;
    vertical-align: top;
    width: 60px;
    height: 60px;
    margin-right: 10px;
    background-image: url( ${ Logo } );
    background-size: cover;
    background-position: center center;
    background-size: 100%;
  }
`;
// background-color: rgba(0, 0, 255, .4);

export const LayoutTopLogoNameSpan = styled.span`
  color: rgb(255, 204, 54);
`;

export const LayoutTopLogoDescription = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-style: italic;
  color: #666;
  margin: -20px 0 0 70px;
`;

export const LayoutTopPhone = LayoutTopLogo.extend``;

export const LayoutTopPhoneNumber = styled.p`
  font-size: 22px;
  font-weight: normal;
  color: #000;
  height: 60px;
  line-height: 60px;
  text-align: right;
  &::before {
    content: "\\f095";
    display: inline-block;
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: 22px;
    margin-right: 5px;
    color: rgb(255, 204, 54);
  }
`;

export const LayoutHead = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 30px;
background-color: rgba(255, 0, 0, .4);
height: 400px;
font-size: 14px;
`;

export const LayoutContent = styled.div`
  max-width: ${LAYOUT_BIG_MAX_WIDTH};
  width: 100%;
  margin: 0 auto;
`;


export const LayoutProfit = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 30px;
background-color: rgba(0, 255, 0, .4);
height: 400px;
font-size: 14px;
`;

export const LayoutDescription = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 30px;
background-color: rgba(0, 0, 255, .4);
height: 400px;
font-size: 14px;
`;

export const LayoutTOSet = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 30px;
background-color: rgba(255, 0, 255, .4);
height: 400px;
font-size: 14px;
`;

export const LayoutPhotoGallery = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 30px;
background-color: rgba(255, 255, 0, .4);
height: 400px;
font-size: 14px;
`;

export const LayoutWarranty = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 30px;
background-color: rgba(127, 255, 0, .4);
height: 400px;
font-size: 14px;
`;

export const LayoutContacts = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 30px;
background-color: rgba(255, 127, 0, .4);
height: 400px;
font-size: 14px;
`;

export const LayoutCallToAction = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 30px;
background-color: rgba(255, 0, 127, .4);
height: 400px;
font-size: 14px;
`;


export const LayoutScreenHeader = styled.h3`
  font-size: 36px;
  font-weight: normal;
  color: #000;
  
`;

export const LayoutScreenHeaderSpan = styled.span`
  color: rgb(255, 204, 54);
`;

export const LayoutProfitList = styled.ul`
  
`;

export const LayoutProfitListItem = styled.li`
  list-style-type: none;
  list-style-position: inside;
  font-size: 24px;
  font-weight: normal;
  color: #000;
`;

export const LayoutProfitListItemSpan = styled.span`
  display: inline-block;
  vertical-align: top;
`;