import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

export const ModelCollectionSelector = createSelector(
  ( state: RootState ) => state.price.ModelCollection,
  ( ModelCollection ) => ModelCollection,
);

export const CurrentModelItemSelector = createSelector(
  ( state: RootState ) => state.price.CurrentModelItem,
  ( CurrentModelItem ) => CurrentModelItem,
);