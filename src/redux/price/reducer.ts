import { combineReducers } from 'redux';

import {
  CollectionContain,
  PhasesCollectionInterface,
  ModificationsCollectionInterface,
  CurrentModelModificationsCollectionInterface
} from '@src/interfaces';

import {
  SELECT_CURRENT_MODEL
} from '@src/redux/price';

export type State = {
  readonly ModelCollection: CollectionContain[],
  readonly CurrentModelModificationsCollection: 
  CurrentModelModificationsCollectionInterface,
  // readonly ModificationCollection: string[]
};

const ModelCollection: CollectionContain[] = [
  {
    id: 'duster',
    value: 'Duster',
  },
  {
    id: 'logan', 
    value: 'Logan', 
  },
  {
    id: 'logan2', 
    value: 'Logan 2', 
  },
  {
    id: 'sandero', 
    value: 'Sandero', 
  },
  {
    id: 'sandero2', 
    value: 'Sandero 2', 
  },
  {
    id: 'sanderoStepway',
    value: 'Sandero Stepway',
  },
  {
    id: 'sanderoStepway2',
    value: 'Sandero Stepway 2',
  },
  {
    id: 'fluence',
    value: 'Fluence',
  },
];

const PhasesCollection: PhasesCollectionInterface = {
  default: {
    header: '',
    phases: []
  }
}



const ModificationsCollection: ModificationsCollectionInterface = {
  default: {
    header: '',
    modifications: []
  },
  duster: {
    header: 'Duster',
    phases: [
      {
        id: 'phase1',
        value: 'Фаза 1',
      },
      {
        id: 'phase2',
        value: 'Фаза 2',
      }
    ],
    modifications: [
      {
        id: 'ph1K4M',
        value: 'Фаза 1: 1.6 (K4M, 102 л/с)',
      },
      {
        id: 'ph1K4MwC',
        value: 'Фаза 1: 1.6 (K4M, 102 л/с) с кондиционером',
      },
      {
        id: 'ph1F4R',
        value: 'Фаза 1: 2.0 (F4R, 135 л/с)',
      },
      {
        id: 'ph1F4RwC',
        value: 'Фаза 1: 2.0 (F4R, 135 л/с) с кондиционером',
      },
      {
        id: 'ph2H4M430wC',
        value: 'Фаза 2: 1.6 (H4M430, 114 л/с) с кондиционером',
      },
      {
        id: 'ph2F4R410wC',
        value: 'Фаза 2: 2.0 (F4R410, 143 л/с) с кондиционером',
      },
    ],
  },
  logan: {
    header: 'Logan',
    modifications: [
      {
        id: 'ph1K7JK7M',
        value: 'Фаза 1: 1.4 / 1.6 (8-ми клапанный K7J / K7M)',
      },
      {
        id: 'ph1K7JK7MwC',
        value: 'Фаза 1: 1.4 / 1.6 (8-ми клапанный K7J / K7M) с кондиционером',
      },
      {
        id: 'ph1K4M',
        value: 'Фаза 1: 1.6 (16-ти клапанный K4M)',
      },
      {
        id: 'ph1K4MwC',
        value: 'Фаза 1: 1.6 (16-ти клапанный K4M) с кондиционером',
      },
      {
        id: 'ph2K7JK7M',
        value: 'Фаза 2: 1.4 / 1.6 (8-ми клапанный K7J / K7M)',
      },
      {
        id: 'ph2K7JK7MwC',
        value: 'Фаза 2: 1.4 / 1.6 (8-ми клапанный K7J / K7M) с кондиционером',
      },
      {
        id: 'ph2K4M',
        value: 'Фаза 2: 1.6 (16-ти клапанный K4M)',
      },
      {
        id: 'ph2K4MwC',
        value: 'Фаза 2: 1.6 (16-ти клапанный K4M) с кондиционером',
      },
    ],
  },
  logan2: {
    header: 'Logan 2',
    modifications: [

    ],
  },
  sandero: {
    header: 'Sandero',
    modifications: [
      {
        id: '',
        value: '',
      }
    ],
  },
  sandero2: {
    header: 'Sandero 2',
    modifications: [
      {
        id: '',
        value: '',
      }
    ],
  },
  sanderoStepway: {
    header: 'Sandero Stepway',
    modifications: [
      {
        id: '',
        value: '',
      }
    ],
  },
  sanderoStepway2: {
    header: 'Sandero Stepway 2',
    modifications: [
      {
        id: '',
        value: '',
      }
    ],
  },
  fluence: {
    header: 'Fluence',
    modifications: [
      {
        id: '',
        value: '',
      }
    ],
  },

};

const CurrentModelModificationsInitialState: 
CurrentModelModificationsCollectionInterface =
  ModificationsCollection.default;

export const reducer = combineReducers({
  ModelCollection: ( state = ModelCollection, action ) => {
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
      default:
        return state;
    }
  }
});