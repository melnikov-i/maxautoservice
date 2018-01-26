import { combineReducers } from 'redux';

import { reducer as layout, State as LayoutState } from '@src/redux/layout';
import { reducer as carousel, State as CarouselState } from '@src/redux/carousel';

export interface RootState {
  layout: LayoutState,
  carousel: CarouselState,
}

export const rootReducer = combineReducers<RootState>({
  layout,
  carousel,
});