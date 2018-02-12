import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

export const ModelCollectionSelector = createSelector(
  ( state: RootState ) => state.price.ModelCollection,
  ( ModelCollection ) => ModelCollection,
);

export const CurrentModelModificationsCollectionSelector = 
createSelector(
  ( state: RootState ) => 
    state.price.CurrentModelModificationsCollection,
  ( CurrentModelModificationsCollection ) => 
    CurrentModelModificationsCollection,
);