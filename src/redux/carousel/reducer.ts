import { combineReducers } from 'redux';

import {
  CarouselItemDataInterface
} from '@src/interfaces';

import {
  CAROUSEL_ITEM_DATA_UPDATE,
  CAROUSEL_BEFORE_DELAY_UPDATE,
} from '@src/redux/carousel'


export type State = {
  readonly CarouselItemData: CarouselItemDataInterface,
};

const slide1 = require('@src/images/slide_1');
const slide2 = require('@src/images/slide_2');

const CarouselItemDataInitialState: CarouselItemDataInterface = {
  animationDelay: '5',
  marginLeft: '-100',
  images: [
    slide2,
    slide1,
    slide2,
  ]
};

export const reducer = combineReducers({
  CarouselItemData: 
  ( state = CarouselItemDataInitialState, action ) => {
    switch ( action.type ) {
      case CAROUSEL_ITEM_DATA_UPDATE:
        return {
          ...action.payload,
        };
      case CAROUSEL_BEFORE_DELAY_UPDATE:
        return {
          ...state,
          ['beforeDelay']: action.payload,
        };
      default:
        return state;
    }
  },
});