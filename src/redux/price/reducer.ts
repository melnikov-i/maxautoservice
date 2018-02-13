import { combineReducers } from 'redux';

import {
  CollectionContain,
  ModificationsCollectionInterface,
  CurrentModelModificationsCollectionInterface,
  PriceItemInterface
} from '@src/interfaces';

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

const ModificationsCollection: ModificationsCollectionInterface = {
  default: {
    header: '',
    phases: [
      {
        phaseHeader: '',
        modifications: [],
      }
    ]
  },
  duster: {
    header: 'Duster',
    phases: [
      {
        phaseHeader: 'Фаза 1',
        modifications: [
          {
            id: 'dPh1K4M',
            value: 'K4M (1.6, 102 л/с)',
          },
          {
            id: 'dPh1K4MwC',
            value: 'K4M (1.6, 102 л/с, A/C)',
          },
          {
            id: 'dPph1F4R',
            value: 'F4R (2.0, 135 л/с)',
          },
          {
            id: 'dPph1F4RwC',
            value: 'F4R (2.0, 135 л/с, A/C)',
          },
        ],
      },
      {
        phaseHeader: 'Фаза 2',
        modifications: [
          {
            id: 'dPh2H4M430wC',
            value: 'H4M430 (1.6, 114 л/с, A/C)',
          },
          {
            id: 'dPh2F4R410wC',
            value: 'F4R410 (2.0, 143 л/с, A/C)',
          },
        ]
      }
    ],
  },
  logan: {
    header: 'Logan',
    phases: [
      {
        phaseHeader: 'Фаза 1',
        modifications: [
          {
            id: 'lPh1K7J',
            value: 'K7J (1.4v8)',
          },
          {
            id: 'lPh1K7M',
            value: 'K7M (1.6v8)',
          },
          {
            id: 'lPh1K7JwC',
            value: 'K7J (1.4v8, A/C)',
          },
          {
            id: 'lPh1K7MwC',
            value: 'K7M (1.6v8, A/C)',
          },
          {
            id: 'lPh1K4M',
            value: 'K4M (1.6v16)',
          },
          {
            id: 'lPh1K4MwC',
            value: 'K4M (1.6v16, A/C)',
          },
        ],
      },
      {
        phaseHeader: 'Фаза 2',
        modifications: [
          {
            id: 'lPh2K7J',
            value: 'K7J (1.6v8)',
          },
          {
            id: 'lPh2K7M',
            value: 'K7M (1.4v8)',
          },
          {
            id: 'lPh2K7JwC',
            value: 'K7J (1.4v8, A/C)',
          },
          {
            id: 'lPh2K7MwC',
            value: 'K7M (1.6v8, A/C)',
          },
          {
            id: 'lPh2K4M',
            value: 'K4M (1.6v16)',
          },
          {
            id: 'lPh2K4MwC',
            value: 'K4M (1.6v16, A/C)',
          },
        ],
      }
    ],
  },
  logan2: {
    header: 'Logan 2',
    phases: [
      {
        phaseHeader: '',
        modifications: [
          {
            id: 'l2K7M',
            value: 'K7M (1.6v8, 82 л/с, МКПП)'
          },
          {
            id: 'l2K7MwC',
            value: 'K7M (1.6v8, 82 л/с, МКПП, A/C)'
          },
          {
            id: 'l2K4M',
            value: 'K4M (1.6v16, 113 л/с, МКПП)'
          },
          {
            id: 'l2K4MACP',
            value: 'K4M (1.6v16, 102 л/с, АКПП)'
          },
        ],
      },
    ],
  },
  sandero: {
    header: 'Sandero',
    phases: [
      {
        phaseHeader: '',
        modifications: [
          {
            id: 'sK7J',
            value: 'K7J (1.4v8)',
          },
          {
            id: 'sK7JwC',
            value: 'K7J (1.4v8, A/C)',
          },
          {
            id: 'sK7M',
            value: 'K7M (1.6v8)',
          },
          {
            id: 'sK7MwC',
            value: 'K7M (1.6v8, A/C)',
          },
          {
            id: 'sK4M',
            value: 'K4M (1.6v16)',
          },
          {
            id: 'sK4MwC',
            value: 'K4M (1.6v16, A/C)',
          },
        ],
      },
    ],
  },
  sandero2: {
    header: 'Sandero 2',
    phases: [
      {
        phaseHeader: '',
        modifications: [
          {
            id: 's2K7M',
            value: 'K7M (1.6v8, 82 л/с, МКПП)'
          },
          {
            id: 's2K7MwC',
            value: 'K7M (1.6v8, 82 л/с, МКПП, A/C)'
          },
          {
            id: 's2K4M',
            value: 'K4M (1.6v16, 113 л/с, МКПП)'
          },
          {
            id: 's2K4MACP',
            value: 'K4M (1.6v16, 102 л/с, АКПП)'
          },
        ],
      },
    ],
  },
  sanderoStepway: {
    header: 'Sandero Stepway',
    phases: [
      {
        phaseHeader: '',
        modifications: [
          {
            id: 'swK7MwC',
            value: 'K7M (1.6v8, A/C)',
          },
          {
            id: 'swK4MwC',
            value: 'K4M (1.6v16, A/C)',
          },
        ],
      },
    ],
  },
  sanderoStepway2: {
    header: 'Sandero Stepway 2',
    phases: [
      {
        phaseHeader: '',
        modifications: [
          {
            id: 'sw2K7M',
            value: 'K7M (1.6v8, 82 л/с, МКПП)',
          },
          {
            id: 'sw2K7MwC',
            value: 'K7M (1.6v8, 82 л/с, МКПП, A/C)',
          },
          {
            id: 'sw2K4M',
            value: 'K4M (1.6v16, 113 л/с)',
          },
        ],
      },
    ],
  },
  fluence: {
    header: 'Fluence',
    phases: [
      {
        phaseHeader: '',
        modifications: [
          {
            id: 'fK4M',
            value: 'K4M (1.6, 116 л/с)',
          },
          {
            id: 'fM4R',
            value: 'M4R (2.0, 138 л/с)',
          },
          {
            id: 'fH4M',
            value: 'H4M (1.6 114 л/с)',
          },
        ],
      },
    ],
  },
};

const Price = {
  'dPh1K4M': {
    header: '',
    price: [
      '5900 (со свечами)',
      '4900 (со свечами)',
      '3800 (со свечами)',
    ],
  },
  'dPh1K4MwC': {
    header: '',
    price: [
      '6990 (со свечами)',
      '5600 (со свечами)',
      '4300 (со свечами)',
    ],
  },
  'dPh1F4R': {
    header: '',
    price: [
      '6400 (со свечами)',
      '5400 (со свечами)',
      '5300 (со свечами)',
    ],
  },
  'dPh1F4RwC': {
    header: '',
    price: [
      '7500 (со свечами)',
      '6100 (со свечами)',
      '5700 (со свечами)',
    ],
  },
  'dPh2H4M430wC': {
    header: '',
    price: [
      '5900 (без свечей) / 8000 (со свечами)',
      '5300 (без свечей) / 7400 (со свечами)',
      '4300 (без свечей) / 6400 (со свечами)',
    ],
  },
  'dPh2F4R410wC': {
    header: '',
    price: [
      '6500 (со свечами)',
      '6200 (со свечами)',
      '5990 (со свечами)',
    ],
  },
  'lPh1K7J': {
    header: '',
    price: ['4900', '4200', '3800',],
  },
  'lPh1K7M': {
    header: '',
    price: ['4900', '4200', '3800',],
  },
  'lPh1K7JwC': {
    header: '',
    price: ['5800', '4700', '3990',],
  },
  'lPh1K7MwC': {
    header: '',
    price: ['5800', '4700', '3990',],
  },
  'lPh1K4M': {
    header: '',
    price: ['6100', '4800', '3700',],
  },
  'lPh1K4MwC': {
    header: '',
    price: ['7000', '5300', '4000',],
  },
  'lPh2K7J': {
    header: '',
    price: ['5300', '4400', '3900',],
  },
  'lPh2K7M': {
    header: '',
    price: ['5300', '4400', '3900',],
  },
  'lPh2K7JwC': {
    header: '',
    price: ['6200', '4900', '4400',],
  },
  'lPh2K7MwC': {
    header: '',
    price: ['6200', '4900', '4400',],
  },
  'lPh2K4M': {
    header: '',
    price: ['6100', '4800', '3700',],
  },
  'lPh2K4MwC': {
    header: '',
    price: ['7000', '5300', '4000',],
  },
  'l2K7M': {
    header: '',
    price: [
      '4100 (без свечей) / 5300 (со свечами)',
      '3600 (без свечей) / 4400 (со свечами)',
      '3200 (без свечей) / 3900 (со свечами)',
    ],
  },
  'l2K7MwC': {
    header: '',
    price: [
      '4800 (без свечей) / 5900 (со свечами)',
      '4000 (без свечей) / 4800 (со свечами)',
      '3400 (без свечей) / 4100 (со свечами)',
    ],
  },
  'l2K4M': {
    header: '',
    price: [
      '5700 (без свечей) / 6800 (со свечами)',
      '4600 (без свечей) / 5200 (со свечами)',
      '3400 (без свечей) / 4000 (со свечами)',
    ],
  },
  'l2K4MACP': {
    header: '',
    price: [
      '5700 (без свечей) / 6800 (со свечами)',
      '4600 (без свечей) / 5200 (со свечами)',
      '3400 (без свечей) / 4000 (со свечами)',
    ],
  },
  'sK7J': {
    header: '',
    price: [
      '5300 (со свечами)',
      '4400 (со свечами)',
      '3900 (со свечами)',
    ],
  },
  'sK7JwC': {
    header: '',
    price: [
      '6200 (со свечами)',
      '4900 (со свечами)',
      '4400 (со свечами)',
    ],
  },
  'sK7M': {
    header: '',
    price: [
      '5300 (со свечами)',
      '4400 (со свечами)',
      '3900 (со свечами)',
    ],
  },
  'sK7MwC': {
    header: '',
    price: [
      '6200 (со свечами)',
      '4900 (со свечами)',
      '4400 (со свечами)',
    ],
  },
  'sK4M': {
    header: '',
    price: [
      '6100 (со свечами)',
      '4900 (со свечами)',
      '3800 (со свечами)',
    ],
  },
  'sK4MwC': {
    header: '',
    price: [
      '7000 (со свечами)',
      '5300 (со свечами)',
      '4100 (со свечами)',
    ],
  },
  's2K7M': {
    header: '',
    price: [
      '4100 (без свечей) / 5300 (со свечами)',
      '3600 (без свечей) / 4400 (со свечами)',
      '3200 (без свечей) / 3900 (со свечами)',
    ],
  },
  's2K7MwC': {
    header: '',
    price: [
      '4800 (без свечей) / 5900 (со свечами)',
      '4000 (без свечей) / 4800 (со свечами)',
      '3400 (без свечей) / 4100 (со свечами)',
    ],
  },
  's2K4M': {
    header: '',
    price: [
      '5700 (без свечей) / 6800 (со свечами)',
      '4600 (без свечей) / 5200 (со свечами)',
      '3400 (без свечей) / 4000 (со свечами)',
    ],
  },
  's2K4MACP': {
    header: '',
    price: [
      '5700 (без свечей) / 6800 (со свечами)',
      '4600 (без свечей) / 5300 (со свечами)',
      '3400 (без свечей) / 4000 (со свечами)',
    ],
  },
  'swK7MwC': {
    header: '',
    price: [
      '6200 (со свечами)',
      '4900 (со свечами)',
      '4400 (со свечами)',
    ],
  },
  'swK4MwC': {
    header: '',
    price: [
      '7000 (со свечами)',
      '5300 (со свечами)',
      '4100 (со свечами)',
    ],
  },
  'sw2K7M': {
    header: '',
    price: [
      '4200 (без свечей) / 5300 (со свечами)',
      '3600 (без свечей) / 4400 (со свечами)',
      '3200 (без свечей) / 3900 (со свечами)',
    ],
  },
  'sw2K7MwC': {
    header: '',
    price: [
      '4800 (без свечей) / 5900 (со свечами)',
      '4000 (без свечей) / 4800 (со свечами)',
      '3400 (без свечей) / 4100 (со свечами)',
    ],
  },
  'sw2K4M': {
    header: '',
    price: [
      '5700 (без свечей) / 6800 (со свечами)',
      '4500 (без свечей) / 5200 (со свечами)',
      '3300 (без свечей) / 3900 (со свечами)',
    ],
  },
  'fK4M': {
    header: '',
    price: [
      '6600 (без свечей) / 7700 (со свечами)',
      '5900 (без свечей) / 6600 (со свечами)',
      '4000 (без свечей) / 4600 (со свечами)',
    ],
  },
  'fM4R': {
    header: '',
    price: [
      '6900 (без свечей) / 12600 (со свечами)',
      '6700 (без свечей) / 9300 (со свечами)',
      '4200 (без свечей) / 6800 (со свечами)',
    ],
  },
  'fH4M': {
    header: '',
    price: [
      '6600 (без свечей) / 12200 (со свечами)',
      '6000 (без свечей) / 8500 (со свечами)',
      '4000 (без свечей) / 6600 (со свечами)',
    ],
  },
};

console.log('Price:', Price);

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
        return [];
      case SELECT_CURRENT_PRICE:
        return Price[action.payload];
      default:
        return state;
    }
  }
});