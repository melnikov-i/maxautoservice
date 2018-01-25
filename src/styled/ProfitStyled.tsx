import styled from 'styled-components';

import {
  ProfitIconStyleType
} from '@src/interfaces';

import {
  PROFIT_ICON_SIZE,
  PROFIT_ICON_FONT_SIZE,
  YELLOW_COLOR,
  BLACK_COLOR,
  GLOBAL_INDENT
} from '@src/styled';

export const ProfitItem = styled.div`
  width: 30.1333%;
  margin: ${GLOBAL_INDENT};
  display: inline-block;
  vertical-align: top;
`;
// background-color: rgba(80, 80, 80, .4);

export const ProfitItemIcon = styled.div`
  margin: 20px auto;
  width: ${PROFIT_ICON_SIZE};
  &::before {
    content: "\\${(props: ProfitIconStyleType) => props.icon}";
    display: block;
    width: ${PROFIT_ICON_SIZE};
    height: ${PROFIT_ICON_SIZE};
    border-radius: 50%;
    color: ${BLACK_COLOR};
    background-color: ${YELLOW_COLOR};
    font-size: ${PROFIT_ICON_FONT_SIZE};
    font-family: 'FontAwesome';
    font-weight: normal;
    text-align: center;
    line-height: ${PROFIT_ICON_SIZE};
  }
`;

export const ProfitItemHeader = styled.h3`
  font-size: 24px;
  text-align: center;
`;

export const ProfitItemText = styled.p`
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`;
