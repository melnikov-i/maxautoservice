import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

export const CarouselItemDataSelector = createSelector(
  ( state: RootState ) => state.carousel.CarouselItemData,
  ( CarouselItemData ) => CarouselItemData,
);