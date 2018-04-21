import { combineReducers } from 'redux';

import {
  PageDataInterface
} from '@src/interfaces';

export type State = {
  readonly PageData: PageDataInterface,
};

const diagnostyc = require('@src/images/diagnostyc');
const service = require('@src/images/service');

const PageDataInitialState = {
  logo: {
    yellow: 'MAX',
    black: 'AUTO',
    header: 'Ваш проводник в мире Renault!',
  },
  phone: '+7 (952) 277-7763',
  profitHeader: 'Почему сервис Renault в MAXAUTO?',
  profit: [
    {
      icon: 'f087',
      header: 'Опыт более 10 лет',
      text: 'Обслуживание автомобилей наших клиентов выполняется ' 
          + 'профессионалами высокого уровня. За плечами '
          + 'наших специалистов многолетний опыт работы '
          + 'на СТО официального дилера.'
    },
    {
      icon: 'f0d6',
      header: 'Ничего лишнего',
      text: 'В стоимость работ и запасных частей включено только '
          + 'необходимое. Никаких подводных камней. Поиск наиболее '
          + 'оптимального и комфортного для Вас решения.'
    },
    {
      icon: 'f046',
      header: 'Все в наличии',
      text: 'Широкий спектр запасных частей: как оригинальных, '
          + 'так и не оригинальных различных производителей. '
          + 'Всегда можно сделать оптимальный выбор.',
    },
    {
      icon: 'f0f1',
      header: 'Точная диагностика',
      text: 'В наличии имеется все необходимое для диагностики оборудование, '
          + 'а также опытный персонал.',
    },
    {
      icon: 'f017',
      header: 'Мы ценим ваше время',
      text: 'Все работы выполняются в заранее оговоренный срок.',
    },
    {
      icon: 'f2b5',
      header: 'Гарантия',
      text: 'На все виды работ и запасных частей мы предоставляем полную '
      + 'гарантию качества.',
    },
  ],
  description: {
    header: 'Ваш проводник в мире Renault!',
    text: [
      'Наш сервисный центр оказывает услуги по техническому '
    + 'обслуживанию, ремонту и диагностике всех моделей автомобиля '
    + 'марки Renault. За плечами наших механиков богатый опыт '
    + 'работы в официальных дилерских центрах Renault. Все работы '
    + 'выполняются на основании разработанного производителем '
    + 'регламента по обслуживанию и ремонту автомобилей.',
      'В перечень предоставляемых нами услуг входят следующие виды работ:',
    ],
    inviteToCall: 'Уточнить стоимость работ или записаться на ремонт Вы '
      + 'можете по телефону:',
    list: [
      {
        header: 'Диагностика и ремонт электрооборудования:',
        text: 'Для выполнения диагностики систем бортовой электроники '
          + 'применяется автосканер Renault CAN Clip. Этот '
          + 'программно-аппаратный комплекс позволяет максимально '
          + 'точно определить источник неисправности в автомобиле, '
          + 'а также позволяет выполнять дополнительные виды работ, '
          + 'связанные с электроникой: программирвоание ключей, '
          + 'адаптация и конфигурирование электронных блоков управления. '
          + 'Выполняем диагностику и ремонт электропроводки, замену '
          + 'датчиков и предохранителей.',
        image: diagnostyc,
      },
      {
        header: 'Механический ремонт:',
        text: 'Мы оказываем услуги по механическому ремонту и '
          + 'плановому техническому обслуживанию автомобилей марки '
          + 'Renault. Наши специалисты обладают большим опытом по '
          + 'ремонту бензиновых и дизельных двигателей любой '
          + 'сложности и механических коробок переключения передач, '
          + 'быстро найдут и устранят любую неисправность.',
        image: service,
      }
    ],
  },
  priceHeader: 'Узайте стоимость ТО в два клика!',
  beltHeader: 'Стоимость замены ремней ГРМ',
  otherHeader: 'Услуги и цены',
  address: {
    header: 'Адрес и схема проезда',
    address: 'Санкт-Петербург, Ириновский пр., д. 2Л',
    addressIcon: 'f041',
    schedule: 'Пн - Вс: с 9:00 до 21:00',
    scheduleIcon: 'f073',
    phoneIcon: 'f095',
  }
}

export const reducer = combineReducers({
  PageData: ( state = PageDataInitialState, action ) => {
    switch ( action.type ) {
      default:
        return state;
    }
  },
});