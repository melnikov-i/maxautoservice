import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

export const HelloSelecror = createSelector(
  ( state: RootState ) => state.layout.Hello,
  ( Hello ) => Hello,
);