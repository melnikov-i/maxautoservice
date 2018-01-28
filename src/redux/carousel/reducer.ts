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
  direction: false,
  delay: '8000',
  isFirst: true,
  slides: [
    {
      images: slide2,
      header: 'Сервисные акции',
      text: 'Специальные предложения на запчасти Renault',
    },
    {
      images: slide1,
      header: 'Быстро и качественно',
      text: 'Обслуживаем весь модельный ряд Renault',
    },
    {
      images: slide2,
      header: 'Сервисные акции',
      text: 'Специальные предложения на запчасти Renault',
    },
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