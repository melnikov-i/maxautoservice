import styled from 'styled-components';

import {
  GLOBAL_INDENT,
} from '@src/styled';

export const TOCalculatorWrapper = styled.div`
  width: 100%;
`;

export const TOCalculatorDroppedListWrapper = styled.div`
  width: 30.1333%;
  margin: ${ GLOBAL_INDENT };
  display: inline-block;
  vertical-align: top;
  height: 50px;

background-color: rgba(255, 0, 0, .4);
`;

export const TOCalculatorDroppedListSelect = styled.select`
  width: 100%;
  height: 100%;
  font-size: 24px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
`;

export const TOCalculatorDroppedListOption = styled.option`
  font-size: 24px;
`;