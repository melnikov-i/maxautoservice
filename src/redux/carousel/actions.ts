import {
  CarouselItemDataInterface
} from '@src/interfaces';

// import { Dispatch } from '@src/redux';

export const CAROUSEL_ITEM_DATA_UPDATE = 
  'CAROUSEL_ITEM_DATA_UPDATE';
export const CAROUSEL_BEFORE_DELAY_UPDATE =
  'CAROUSEL_BEFORE_DELAY_UPDATE';

export type Actions = {
  CAROUSEL_ITEM_DATA_UPDATE: {
    type: typeof CAROUSEL_ITEM_DATA_UPDATE,
    payload: CarouselItemDataInterface,
  },
  CAROUSEL_BEFORE_DELAY_UPDATE: {
    type: typeof CAROUSEL_BEFORE_DELAY_UPDATE,
    payload: string,
  }
};

export const syncActionCreators = {
  carouselItemDataUpdate:
  ( payload: CarouselItemDataInterface ):
  Actions[typeof CAROUSEL_ITEM_DATA_UPDATE] => ({
    type: CAROUSEL_ITEM_DATA_UPDATE, payload
  }),
  carouselBeforeDelayUpdate:
  ( payload: string ):
  Actions[typeof CAROUSEL_BEFORE_DELAY_UPDATE] => ({
    type: CAROUSEL_BEFORE_DELAY_UPDATE, payload
  })
};

export const asyncActionCreators = {
  // makeCarouselItemDataUpdate:
  // ( payload: CarouselItemDataInterface ) => {
  //   return ( dispatch: Dispatch ) => {
  //     if ( payload.now ) {
  //       let max_id = setTimeout(function () {});
  //       while (max_id--) {
  //         clearTimeout(max_id);
  //       }
  //       dispatch(
  //         syncActionCreators.carouselItemDataUpdate(payload)
  //       );
  //     } else {
  //       setTimeout(() => {
  //         dispatch(
  //           syncActionCreators.carouselItemDataUpdate(payload)
  //         );
  //       }, payload.delay);
  //     }
  //   }
  // }
};