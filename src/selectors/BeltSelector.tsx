import { createSelector } from 'reselect';

import { RootState } from '@src/redux';

export const BeltModelCollectionSelector = createSelector(
  ( state: RootState ) => state.belt.BeltModelCollection,
  ( BeltModelCollection ) => BeltModelCollection,
);

export const CurrentBeltModelModificationsCollectionSelector = 
createSelector(
  ( state: RootState ) => 
    state.belt.CurrentBeltModelModificationsCollection,
  ( CurrentBeltModelModificationsCollection ) => 
    CurrentBeltModelModificationsCollection,
);

export const CurrentModificationBeltCollectionSelector = 
createSelector(
  ( state: RootState ) => 
    state.belt.CurrentModificationBeltCollection,
  ( CurrentModificationBeltCollection ) => 
    CurrentModificationBeltCollection,
);