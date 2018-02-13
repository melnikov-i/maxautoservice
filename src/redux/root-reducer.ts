import { combineReducers } from 'redux';

import { reducer as layout, State as LayoutState } from '@src/redux/layout';
import { reducer as carousel, State as CarouselState } from '@src/redux/carousel';
import { reducer as price, State as PriceState } from '@src/redux/price';
import { reducer as belt, State as BeltState } from '@src/redux/belt';

export interface RootState {
  layout: LayoutState,
  carousel: CarouselState,
  price: PriceState,
  belt: BeltState,
}

export const rootReducer = combineReducers<RootState>({
  layout,
  carousel,
  price,
  belt,
});