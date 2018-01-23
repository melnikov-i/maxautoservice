import { combineReducers } from 'redux';

import {
  PageDataInterface
} from '@src/interfaces';

import {

} from '@src/redux/login';

export type State = {
  readonly PageData: PageDataInterface,
  readonly Hello: string,
};

const PageDataInitialState = {
  profit: [
    {
      icon: 'f087',
      header: 'Опыт более 10 лет',
      text: 'Обслуживание автомобилей наших клиентов выполняется ' 
          + 'профессионалами высокого уровня. За плечами большинства '
          + 'наших специалистов многолетний опыт работы в этой области, '
          + 'в том числе и на СТО официального дилера.'
    },
    {
      icon: 'f0d6',
      header: 'Разумные цены',
      text: 'Стоимость выполненных работ и запасных частей значительно ниже, чем у официалов.'
    },
    {
      icon: 'f046',
      header: 'Все в наличии',
      text: 'Широкий спекрт запасных частей как оригинальных, так и не оригинальных '
          + 'различных производителей. Всегда можно подобрать деталь не переплачивая.'
    },
    {
      icon: 'f0f1',
      header: 'Точная диагностика',
      text: 'В наличии имеется все необходимое для диагностики оборудование, '
          + 'а также опытный пресонал.'
    },
    {
      icon: 'f017',
      header: 'Рекордные сроки',
      text: 'Мы ценим ваше время.'
    },
    {
      icon: 'f2b5',
      header: 'Гарантия',
      text: 'На все виды работ и запасные части мы предоставляем полную гарантию качества.'
    },
  ]
}

export const reducer = combineReducers({
  PageData: ( state = PageDataInitialState, action ) => {
    switch ( action.type ) {
      default:
        return state;
    }
  },
  Hello: ( state = 'Hello', action ) => {
    switch ( action.type ) {
      default:
        return state;
    }
  },
});