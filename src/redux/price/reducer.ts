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
        switch ( action.payload ) {
          case 'duster': return ModificationsCollection.duster;
          case 'logan': return ModificationsCollection.logan;
          case 'logan2': return ModificationsCollection.logan2;
          case 'sandero': return ModificationsCollection.sandero;
          case 'sandero2': return ModificationsCollection.sandero2;
          case 'sanderoStepway': return ModificationsCollection.sanderoStepway;
          case 'sanderoStepway2': return ModificationsCollection.sanderoStepway2;
          case 'fluence': return ModificationsCollection.fluence;
          default: return ModificationsCollection.default;
        }
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
        switch ( action.payload ) {
          case 'dPh1K4M': return Price['dPh1K4M'];
          case 'dPh1K4MwC': return Price['dPh1K4MwC'];
          case 'dPh1F4R': return Price['dPh1F4R'];
          case 'dPh1F4RwC': return Price['dPh1F4RwC'];
          case 'dPh2H4M430wC': return Price['dPh2H4M430wC'];
          case 'dPh2F4R410wC': return Price['dPh2F4R410wC'];
          case 'lPh1K7J': return Price['lPh1K7J'];
          case 'lPh1K7M': return Price['lPh1K7M'];
          case 'lPh1K7JwC': return Price['lPh1K7JwC'];
          case 'lPh1K7MwC': return Price['lPh1K7MwC'];
          case 'lPh1K4M': return Price['lPh1K4M'];
          case 'lPh1K4MwC': return Price['lPh1K4MwC'];
          case 'lPh2K7J': return Price['lPh2K7J'];
          case 'lPh2K7M': return Price['lPh2K7M'];
          case 'lPh2K7JwC': return Price['lPh2K7JwC'];
          case 'lPh2K7MwC': return Price['lPh2K7MwC'];
          case 'lPh2K4M': return Price['lPh2K4M'];
          case 'lPh2K4MwC': return Price['lPh2K4MwC'];
          case 'l2K7M': return Price['l2K7M'];
          case 'l2K7MwC': return Price['l2K7MwC'];
          case 'l2K4M': return Price['l2K4M'];
          case 'l2K4MACP': return Price['l2K4MACP'];
          case 'sK7J': return Price['sK7J'];
          case 'sK7JwC': return Price['sK7JwC'];
          case 'sK7M': return Price['sK7M'];
          case 'sK7MwC': return Price['sK7MwC'];
          case 'sK4M': return Price['sK4M'];
          case 'sK4MwC': return Price['sK4MwC'];
          case 's2K7M': return Price['s2K7M'];
          case 's2K7MwC': return Price['s2K7MwC'];
          case 's2K4M': return Price['s2K4M'];
          case 's2K4MACP': return Price['s2K4MACP'];
          case 'swK7MwC': return Price['swK7MwC'];
          case 'swK4MwC': return Price['swK4MwC'];
          case 'sw2K7M': return Price['sw2K7M'];
          case 'sw2K7MwC': return Price['sw2K7MwC'];
          case 'sw2K4M': return Price['sw2K4M'];
          case 'fK4M': return Price['fK4M'];
          case 'fM4R': return Price['fM4R'];
          case 'fH4M': return Price['fH4M'];
          default: 
            return CurrentModificationPriceCollectionInitialState;
        }
      default:
        return state;
    }
  }
});