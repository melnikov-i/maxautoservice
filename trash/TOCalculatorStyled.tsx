import styled from 'styled-components';

import {
  GLOBAL_INDENT,
  YELLOW_COLOR,
  HEAD_HEADER_BG_COLOR
} from '@src/styled';

export const TOCalculatorWrapper = styled.div`
  width: 100%;
  height: 600px;
`;

export const TOCalculatorItemWrapper = styled.div`
  width: 30.1333%;
  margin: ${ GLOBAL_INDENT };
  display: inline-block;
  vertical-align: top;
  height: 50px;
  background-color: ${ YELLOW_COLOR };
  font-size: 24px;
  line-height: 50px;
  box-sizing: border-box;
  padding-left: 8px;
  position: relative;
  cursor: pointer;
  &::after {
    content: "\\f105";
    font-family: 'FontAwesome';
    font-size: 48px;
    color: #000;
    text-align: center;
    line-height: 50px;
    display: block;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const TOCalculatorSelectWrapper = styled.div`
  width: 30.1333%;
  margin: ${ GLOBAL_INDENT };
  display: inline-block;
  vertical-align: top;
  height: 50px;
  position: relative;
  box-sizing: border-box;
  border: 1px solid ${ YELLOW_COLOR };
  background-color: ${ HEAD_HEADER_BG_COLOR };
`;

export const TOCalculatorSelect = styled.span`
  width: 100%;
  display: block;
  height: 48px;
  line-height: 48px;
  padding-left: 8px;
  font-size: 24px;
  box-sizing: border-box;
  box-shadow: inset 0 0 0 1px ${ YELLOW_COLOR };
  cursor: pointer;
  &::after {
    content: "\\f107";
    font-family: 'FontAwesome';
    font-size: 48px;
    color: #000;
    text-align: center;
    line-height: 48px;
    display: block;
    width: 48px;
    height: 48px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${ YELLOW_COLOR };
    cursor: pointer;
  }
`;

export const TOCalculatorOptionWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
  border: 1px solid ${ YELLOW_COLOR };
  box-sizing: border-box;
`;


export const TOCalculatorOption = styled.p`
  font-size: 16px;
  box-sizing: border-box;
  padding-left: 8px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  &:hover {
    background-color: ${ YELLOW_COLOR };
  }
`;


export const TOCalculatorDroppedListOption = styled.option`
  font-size: 24px;
`;

export const Test = styled.select`
  font-size: 16px;

`;

export const TestOption = styled.option`
  font-size: 16px;
`;