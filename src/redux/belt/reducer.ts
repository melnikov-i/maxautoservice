import { combineReducers } from 'redux';

import {
  CollectionContain,
  CurrentModelModificationsCollectionInterface,
  PriceItemInterface,
} from '@src/interfaces';

import {
  BeltModelCollection,
  ModificationsCollection,
  Belt
} from '@src/data';

import {
  SELECT_CURRENT_BELT_MODEL,
  CLEAN_THIS_BELT_ITEM,
  SELECT_CURRENT_BELT,
} from '@src/redux/belt';

export type State = {
  readonly BeltModelCollection: CollectionContain[],
  readonly CurrentBeltModelModificationsCollection: 
    CurrentModelModificationsCollectionInterface,
  readonly CurrentModificationBeltCollection: PriceItemInterface,
};

const CurrentModificationBeltCollectionInitialState: 
PriceItemInterface =
  {
    header: '',
    price: []
  }

const CurrentModelModificationsInitialState: 
CurrentModelModificationsCollectionInterface =
  ModificationsCollection.default;

export const reducer = combineReducers({
  BeltModelCollection: ( state = BeltModelCollection, action ) => {
    switch ( action.type ) {
      default:
        return state;
    }
  },
  CurrentBeltModelModificationsCollection: 
  ( state = CurrentModelModificationsInitialState, action ) => {
    switch ( action.type ) {
      case SELECT_CURRENT_BELT_MODEL:
        return ModificationsCollection[action.payload];
      case CLEAN_THIS_BELT_ITEM:
        return CurrentModelModificationsInitialState;
      default:
        return state;
    }
  },
  CurrentModificationBeltCollection: 
  (state = CurrentModificationBeltCollectionInitialState, action) => {
    switch ( action.type ) {
      case CLEAN_THIS_BELT_ITEM:
        return CurrentModificationBeltCollectionInitialState;
      case SELECT_CURRENT_BELT:
        return Belt[action.payload];
      default:
        return state;
    }
  }
});