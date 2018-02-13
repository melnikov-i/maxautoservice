import { combineReducers } from 'redux';

import {
  CollectionContain,
  CurrentModelModificationsCollectionInterface,
  PriceItemInterface
} from '@src/interfaces';

import {
  PriceModelCollection,
  ModificationsCollection,
  Price,
} from '@src/data';

import {
  SELECT_CURRENT_MODEL,
  CLEAN_THIS_ITEM,
  SELECT_CURRENT_PRICE,
} from '@src/redux/price';

export type State = {
  readonly ModelCollection: CollectionContain[],
  readonly CurrentModelModificationsCollection: 
    CurrentModelModificationsCollectionInterface,
  readonly CurrentModificationPriceCollection: PriceItemInterface,
};

const CurrentModificationPriceCollectionInitialState: 
PriceItemInterface =
  {
    header: '',
    price: []
  }

const CurrentModelModificationsInitialState: 
CurrentModelModificationsCollectionInterface =
  ModificationsCollection.default;

export const reducer = combineReducers({
  ModelCollection: ( state = PriceModelCollection, action ) => {
    switch ( action.type ) {
      default:
        return state;
    }
  },
  CurrentModelModificationsCollection: 
  ( state = CurrentModelModificationsInitialState, action ) => {
    switch ( action.type ) {
      case SELECT_CURRENT_MODEL:
        return ModificationsCollection[action.payload];
      case CLEAN_THIS_ITEM:
        return CurrentModelModificationsInitialState;
      default:
        return state;
    }
  },
  CurrentModificationPriceCollection: 
  (state = CurrentModificationPriceCollectionInitialState, action) => {
    switch ( action.type ) {
      case CLEAN_THIS_ITEM:
        return CurrentModificationPriceCollectionInitialState;
      case SELECT_CURRENT_PRICE:
        return Price[action.payload];
      default:
        return state;
    }
  }
});