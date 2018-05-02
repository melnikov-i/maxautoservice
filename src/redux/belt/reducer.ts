import { combineReducers } from 'redux';

import {
  CollectionContain,
  CurrentModelModificationsCollectionInterface,
  PriceItemInterface,
} from '@src/interfaces';

import {
  BeltModelCollection,
  BeltModificationsCollection,
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
  BeltModificationsCollection.default;

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
        switch ( action.payload ) {
          case    'logan': return BeltModificationsCollection.logan;
          case   'logan2': return BeltModificationsCollection.logan2;
          case  'sandero': return BeltModificationsCollection.sandero;
          case 'sandero2': return BeltModificationsCollection.sandero2;
          default:
            return BeltModificationsCollection.default;
        }
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
        switch ( action.payload ) {
          case 'lPh1K7J': return Belt['lPh1K7J'];
          case 'lPh1K7M': return Belt['lPh1K7M'];
          case 'lPh1K7JwC': return Belt['lPh1K7JwC'];
          case 'lPh1K7MwC': return Belt['lPh1K7MwC'];
          case 'lPh1K4M': return Belt['lPh1K4M'];
          case 'lPh1K4MwC': return Belt['lPh1K4MwC'];
          case 'lPh2K7J': return Belt['lPh2K7J'];
          case 'lPh2K7JwG': return Belt['lPh2K7JwG'];
          case 'lPh2K7JwC': return Belt['lPh2K7JwC'];
          case 'lPh2K7M': return Belt['lPh2K7M'];
          case 'lPh2K7MwC': return Belt['lPh2K7MwC'];
          case 'lPh2K4M': return Belt['lPh2K4M'];
          case 'lPh2K4MwC': return Belt['lPh2K4MwC'];
          case 'l2K7M': return Belt['l2K7M'];
          case 'l2K7MwC': return Belt['l2K7MwC'];
          case 'l2K4M': return Belt['l2K4M'];
          case 'l2K4MACP': return Belt['l2K4MACP'];
          case 'sK7J': return Belt['sK7J'];
          case 'sK7JwG': return Belt['sK7JwG'];
          case 'sK7JwC': return Belt['sK7JwC'];
          case 'sK7M': return Belt['sK7M'];
          case 'sK7MwC': return Belt['sK7MwC'];
          case 'sK4M': return Belt['sK4M'];
          case 'sK4MwC': return Belt['sK4MwC'];
          case 's2K7M': return Belt['s2K7M'];
          case 's2K7MwC': return Belt['s2K7MwC'];
          case 's2K4M': return Belt['s2K4M'];
          case 's2K4MACP': return Belt['s2K4MACP'];
          default: return CurrentModificationBeltCollectionInitialState;
        };
      default:
        return state;
    }
  }
});