import styled from 'styled-components';

import {
  ProfitIconStyleType
} from '@src/interfaces';

import {
  PROFIT_ICON_SIZE,
  PROFIT_ICON_FONT_SIZE,
  DARK_GRAY_COLOR,
  YELLOW_COLOR,
  GLOBAL_INDENT,
  MIDDLE_SCREEN_MIN,
  MIDDLE_SCREEN_MAX,
  SMALL_SCREEN_MAX,
  SMALL_SCREEN_MIN,
} from '@src/styled';

export const ProfitItem = styled.div`
  width: 30.1333%;
  margin: ${GLOBAL_INDENT};
  display: inline-block;
  vertical-align: top;
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

export const ProfitItemIcon = styled.div`
  margin: 20px auto;
  width: ${PROFIT_ICON_SIZE};
  &::before {
    content: "\\${(props: ProfitIconStyleType) => props.icon}";
    display: block;
    width: ${PROFIT_ICON_SIZE};
    height: ${PROFIT_ICON_SIZE};
    border-radius: 50%;
    color: ${YELLOW_COLOR};
    background-color: ${DARK_GRAY_COLOR};
    font-size: ${PROFIT_ICON_FONT_SIZE};
    font-family: 'FontAwesome';
    font-weight: normal;
    text-align: center;
    line-height: ${PROFIT_ICON_SIZE};
  }
`;

export const ProfitItemHeader = styled.h3`
  font-size: 24px;
  text-align: left;
`;

export const ProfitItemText = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin-top: 10px;
  text-align: left;
`;
