import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

export const PageDataSelecror = createSelector(
  ( state: RootState ) => state.layout.PageData,
  ( PageData ) => PageData,
);