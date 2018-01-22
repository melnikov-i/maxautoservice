import { combineReducers } from 'redux';

import { reducer as layout, State as LayoutState } from '@src/redux/layout';

export interface RootState {
  layout: LayoutState
}

export const rootReducer = combineReducers<RootState>({
  layout,
});