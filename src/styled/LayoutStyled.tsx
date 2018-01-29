import styled from 'styled-components';

import {
  LAYOUT_BIG_MAX_WIDTH,
  YELLOW_COLOR,
  MIDDLE_GRAY_COLOR,
  DARK_GRAY_COLOR,
  GLOBAL_INDENT,
  MIDDLE_SCREEN_MAX,
  TOP_HEIGHT_BIG_SCREEN,
  TOP_HEIGHT_MIDDLE_SCREEN,
  SMALL_SCREEN_MIN,
  SMALL_SCREEN_MAX
} from '@src/styled';

const Logo = require('@src/images/Logo');

export const LayoutWrapper = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding-top: ${ TOP_HEIGHT_BIG_SCREEN };
  @media screen 
    and (min-width: ${ SMALL_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      padding-top: ${ TOP_HEIGHT_MIDDLE_SCREEN };
    }
`;

export const LayoutTopWrapper = styled.div`
  max-width: ${LAYOUT_BIG_MAX_WIDTH};
  width: 100%;
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 2;
    @media screen 
    and (min-width: ${ SMALL_SCREEN_MIN }) 
    and (max-width: ${ SMALL_SCREEN_MIN }) {
      position: relative;
    }
`;

export const LayoutTop = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  width: 100%;
  height: ${ TOP_HEIGHT_BIG_SCREEN };
  padding: 10px 20px;
  margin-left: -50%;
  @media screen 
    and (min-width: ${ SMALL_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      height: ${ TOP_HEIGHT_MIDDLE_SCREEN };
    }
`;

export const LayoutTopLogo = styled.div`
  width: 280px;
  height: 60px;
  display: inline-block;
  vertical-align: top;
  @media screen 
    and (min-width: ${ SMALL_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      display: block;
      margin: 0 auto;
    }
`;

export const LayoutTopLogoName = styled.p`
  font-size: 32px;
  font-weight: 700;
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

export const LayoutTopLogoNameSpan = styled.span`
  color: ${MIDDLE_GRAY_COLOR};
  font-size: 32px;
`;

export const LayoutTopLogoDescription = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-style: italic;
  color: ${MIDDLE_GRAY_COLOR};
  margin: -20px 0 0 70px;
`;

export const LayoutTopPhone = styled.div`
  width: calc(100% - 280px);
  height: 60px;
  display: inline-block;
  vertical-align: top;
  @media screen 
    and (min-width: ${ SMALL_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      width: 205px;
      display: block;
      margin: 0 auto;
    }
`;

export const LayoutTopPhoneNumber = styled.p`
  font-size: 22px;
  font-weight: normal;
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
    color: ${YELLOW_COLOR};
  }
`;



export const LayoutHead = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  position: relative;
`;




export const LayoutContent = styled.div`
  max-width: ${LAYOUT_BIG_MAX_WIDTH};
  width: 100%;
  margin: 0 auto;
`;

export const LayoutScreenWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 40px 0;
`;

export const LayoutScreenHeader = styled.h1`
  font-size: 32px;
  margin-left: ${GLOBAL_INDENT};
`;

export const LayoutDescriptionText = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin: ${GLOBAL_INDENT};
`;

export const LayoutDesctiptionList = styled.div`
  width: 96.8%;
  margin: ${GLOBAL_INDENT};
`;

export const LayoutDescriptionListItem = styled.div`
  list-style-type: none;
  list-style-position: inside;
  padding-bottom: 20px;
`;

export const LayoutDescriptionListImage = styled.img`
  width: 31.73%;
  margin-right: ${ GLOBAL_INDENT };
  display: inline-block;
  vertical-align: top;
  @media screen 
    and (min-width: ${ SMALL_SCREEN_MIN }) 
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }
`;

export const LayoutDescriptionListItemText = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: ${ GLOBAL_INDENT };
  width: 65.06%;
  @media screen 
    and (min-width: ${ SMALL_SCREEN_MIN }) 
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      display: block;
      width: 100%;
    }
`;

export const LayoutDecriptionListItemSpan = styled.p`
  font-size: 16px;
  line-height: 22px;
`;

export const LayoutDescriptionListItemHeader = styled.h4`
  font-size: 16px;
  line-height: 22px;
  display: inline-block;
  vertical-align: top;
  font-weight: 700;
  background-color: ${ YELLOW_COLOR };
  color: #000;
`;





export const LayoutContactsWrapper = styled.div`
  width: 96.8%;
  margin: ${GLOBAL_INDENT};
`;

export const LayoutContactsAddressWrapper = styled.div`
  width: 45.73%;
  display: inline-block;
  vertical-align: top;
  margin-right: ${ GLOBAL_INDENT };
  @media screen 
    and (min-width: ${ SMALL_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      width: 100%;
      display: block;
      margin: 0;
    }
`;

export const LayoutContactsMapWrapper = styled.div`
  width: 50.06%;
  margin-left: ${ GLOBAL_INDENT };
  display: inline-block;
  vertical-align: top;
  @media screen 
    and (min-width: ${ SMALL_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      width: 100%;
      display: block;
      margin: 20px 0 0;
    }
`;

export const LayoutContactsAddress = styled.p`
  font-size: 16px;
  line-height: 30px;
  &::before {
    content: "\\${(props: {icon: string}) => (
      props.icon
    )}";
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-family: 'FontAwesome';
    font-weight: normal;
    font-size: 22px;
    margin-right: 5px;
    text-align: center;
    color: ${YELLOW_COLOR};
  }
`;

export const LayoutContactsPhone = LayoutContactsAddress.extend`
  font-size: 24px;
`;


export const LayoutFooter = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${ DARK_GRAY_COLOR };
`;



