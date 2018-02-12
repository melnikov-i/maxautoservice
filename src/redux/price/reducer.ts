import { combineReducers } from 'redux';

import {
  ModelCollectionItemInterface
} from '@src/interfaces';

export type State = {
  readonly ModelCollection: ModelCollectionItemInterface[],
  readonly CurrentModelItem: ModelCollectionItemInterface['name'],
  // readonly ModificationCollection: string[]
};

const ModelCollectionInitialState = [
  {
    value: 'Duster',
    name: 'duster',
  },
  {
    value: 'Logan', 
    name: 'logan', 
  },
  {
    value: 'Logan 2', 
    name: 'logan2', 
  },
  {
    value: 'Sandero', 
    name: 'sandero', 
  },
  {
    value: 'Sandero 2', 
    name: 'sandero2', 
  },
  {
    value: 'Sandero Stepway',
    name: 'sanderoStepway',
  },
  {
    value: 'Sandero Stepway 2',
    name: 'sanderoStepway2',
  },
  {
    value: 'Fluence',
    name: 'fluence',
  },
];

export const reducer = combineReducers({
  ModelCollection: ( state = ModelCollectionInitialState, action ) => {
    switch ( action.type ) {
      default:
        return state;
    }
  },
  CurrentModelItem: ( state = '', action ) => {
    switch ( action.type ) {
      default:
        return state;
    }
  }
});