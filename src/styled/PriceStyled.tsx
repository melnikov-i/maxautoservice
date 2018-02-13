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
  position: relative;
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

export const PriceModelPhaseItemAnchor = PriceModelItemAnchor.extend`
  font-size: 16px;
  @media screen 
    and (min-width: ${ SMALL_SCREEN_MIN }) 
    and (max-width: ${ MIDDLE_SCREEN_MAX }) {
      font-size: 14px;
    }
`;

export const PriceModelItemText = styled.p`
  padding: 10px 10px 10px 62px;
  font-size: 18px;
  line-height: 32px;
  height: 32px;
`;

export const PriceText = styled.p`
  font-size: 14px;
`;

export const PriceModificationBackAnchor = styled.a`
  width: 52px;
  height: 52px;
  background-color: ${ YELLOW_COLOR };
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  border-right: 2px solid #fff;
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

export const PriceModelPhaseHeader = styled.h3`
  font-size: 24px;
  margin: ${GLOBAL_INDENT};
`;

export const PriceTablePlace = styled.div`
  width: 100%;
  height: 72px;

background-color: rgba(255, 0, 0, .4);
`;

export const PriceTable = styled.table`
  width: 100%;
  margin: 30px auto;
  border-spacing: 0;
`;

export const PriceTableRow = styled.tr`
  width: 100%;
`;

export const PriceTableColl = styled.td`
  width: 50%;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: normal;
  min-height: 24px;
  line-height: 24px;
  text-align: left;
`;