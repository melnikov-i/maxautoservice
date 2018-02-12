import styled from 'styled-components';

import {
  GLOBAL_INDENT,
  MIDDLE_SCREEN_MIN,
  MIDDLE_SCREEN_MAX,
  SMALL_SCREEN_MAX,
  SMALL_SCREEN_MIN,
  YELLOW_COLOR,
  BLACK_COLOR,
} from '@src/styled';

export const PriceModelItem = styled.div`
  width: 30.1333%;
  margin: ${GLOBAL_INDENT};
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  white-space: nowrap;
  background-color: ${ YELLOW_COLOR };
  @media screen 
    and (min-width: ${ MIDDLE_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      width: 46.8%;
    }
  @media screen
    and (min-width: ${ SMALL_SCREEN_MIN })
    and (max-width: ${ SMALL_SCREEN_MAX }) {
      width: 96.8%;
    }
`;

export const PriceModelItemAnchor = styled.a`
  display: block;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
  line-height: 32px;
  height: 32px;
  text-align: left;
`;

export const PriceText = styled.p`
  font-size: 14px;
`;

export const PriceModificationBackAnchor = styled.a`
  width: 52px;
  height: 52px;
  margin: ${GLOBAL_INDENT};
  background-color: ${ YELLOW_COLOR };
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
  &::before {
    content: "\\f104";
    display: block;
    font-family: 'FontAwesome';
    font-size: 52px;
    line-height: 52px;
    color: ${ BLACK_COLOR };
    margin-left: 14px;
  }
`;