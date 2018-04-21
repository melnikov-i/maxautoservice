import {
  CollectionContain,
  ModificationsCollectionInterface,
} from '@src/interfaces';

export const PriceModelCollection: CollectionContain[] = [
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

export const ModificationsCollection: ModificationsCollectionInterface = {
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
            value: 'K4M (1.6, 102 л/с, AC)',
          },
          {
            id: 'dPh1F4R',
            value: 'F4R (2.0, 135 л/с)',
          },
          {
            id: 'dPh1F4RwC',
            value: 'F4R (2.0, 135 л/с, AC)',
          },
        ],
      },
      {
        phaseHeader: 'Фаза 2',
        modifications: [
          {
            id: 'dPh2H4M430wC',
            value: 'H4M430 (1.6, 114 л/с, AC)',
          },
          {
            id: 'dPh2F4R410wC',
            value: 'F4R410 (2.0, 143 л/с, AC)',
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
            value: 'K7J (1.4v8, AC)',
          },
          {
            id: 'lPh1K7MwC',
            value: 'K7M (1.6v8, AC)',
          },
          {
            id: 'lPh1K4M',
            value: 'K4M (1.6v16)',
          },
          {
            id: 'lPh1K4MwC',
            value: 'K4M (1.6v16, AC)',
          },
        ],
      },
      {
        phaseHeader: 'Фаза 2',
        modifications: [
          {
            id: 'lPh2K7J',
            value: 'K7J (1.4v8)',
          },
          {
            id: 'lPh2K7M',
            value: 'K7M (1.6v8)',
          },
          {
            id: 'lPh2K7JwC',
            value: 'K7J (1.4v8, AC)',
          },
          {
            id: 'lPh2K7MwC',
            value: 'K7M (1.6v8, AC)',
          },
          {
            id: 'lPh2K4M',
            value: 'K4M (1.6v16)',
          },
          {
            id: 'lPh2K4MwC',
            value: 'K4M (1.6v16, AC)',
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
            value: 'K7M (1.6v8, 82 л/с, МКПП, AC)'
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
            value: 'K7J (1.4v8, AC)',
          },
          {
            id: 'sK7M',
            value: 'K7M (1.6v8)',
          },
          {
            id: 'sK7MwC',
            value: 'K7M (1.6v8, AC)',
          },
          {
            id: 'sK4M',
            value: 'K4M (1.6v16)',
          },
          {
            id: 'sK4MwC',
            value: 'K4M (1.6v16, AC)',
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
            value: 'K7M (1.6v8, 82 л/с, МКПП, AC)'
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
            value: 'K7M (1.6v8, AC)',
          },
          {
            id: 'swK4MwC',
            value: 'K4M (1.6v16, AC)',
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
            value: 'K7M (1.6v8, 82 л/с, МКПП, AC)',
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

export const Price = {
  'dPh1K4M': {
    header: 'Duster Фаза 1, K4M (1.6, 102 л/с)',
    price: [
      '5 900 р. (со свечами)',
      '4 900 р. (со свечами)',
      '3 800 р. (со свечами)',
    ],
  },
  'dPh1K4MwC': {
    header: 'Duster Фаза 1, K4M (1.6, 102 л/с, AC)',
    price: [
      '6 990 р. (со свечами)',
      '5 600 р. (со свечами)',
      '4 300 р. (со свечами)',
    ],
  },
  'dPh1F4R': {
    header: 'Duster Фаза 1, F4R (2.0, 135 л/с)',
    price: [
      '6 400 р. (со свечами)',
      '5 400 р. (со свечами)',
      '5 300 р. (со свечами)',
    ],
  },
  'dPh1F4RwC': {
    header: 'Duster Фаза 1, F4R (2.0, 135 л/с, AC)',
    price: [
      '7 500 р. (со свечами)',
      '6 100 р. (со свечами)',
      '5 700 р. (со свечами)',
    ],
  },
  'dPh2H4M430wC': {
    header: 'Duster Фаза 2, H4M430 (1.6, 114 л/с, AC)',
    price: [
      '5 900 р. (без свечей) / 8 000 р. (со свечами)',
      '5 300 р. (без свечей) / 7 400 р. (со свечами)',
      '4 300 р. (без свечей) / 6 400 р. (со свечами)',
    ],
  },
  'dPh2F4R410wC': {
    header: 'Duster Фаза 2, F4R410 (2.0, 143 л/с, AC)',
    price: [
      '6 500 р. (со свечами)',
      '6 200 р. (со свечами)',
      '5 990 р. (со свечами)',
    ],
  },
  'lPh1K7J': {
    header: 'Logan Фаза 1, K7J (1.4v8)',
    price: ['4 900 р.', '4 200 р.', '3 800 р.',],
  },
  'lPh1K7M': {
    header: 'Logan Фаза 1, K7M (1.6v8)',
    price: ['4 900 р.', '4 200 р.', '3 800 р.',],
  },
  'lPh1K7JwC': {
    header: 'Logan Фаза 1, K7J (1.4v8, AC)',
    price: ['5 800 р.', '4 700 р.', '3 990 р.',],
  },
  'lPh1K7MwC': {
    header: 'Logan Фаза 1, K7M (1.6v8, AC)',
    price: ['5 800 р.', '4 700 р.', '3 990 р.',],
  },
  'lPh1K4M': {
    header: 'Logan Фаза 1, K4M (1.6v16)',
    price: ['6 100 р.', '4 800 р.', '3 700 р.',],
  },
  'lPh1K4MwC': {
    header: 'Logan Фаза 1, K4M (1.6v16, AC)',
    price: ['7 000 р.', '5 300 р.', '4 000 р.',],
  },
  'lPh2K7J': {
    header: 'Logan Фаза 2, K7J (1.4v8)',
    price: ['5 300 р.', '4 400 р.', '3 900 р.',],
  },
  'lPh2K7M': {
    header: 'Logan Фаза 2, K7M (1.6v8)',
    price: ['5 300 р.', '4 400 р.', '3 900 р.',],
  },
  'lPh2K7JwC': {
    header: 'Logan Фаза 2, K7J (1.4v8, AC)',
    price: ['6 200 р.', '4 900 р.', '4 400 р.',],
  },
  'lPh2K7MwC': {
    header: 'Logan Фаза 2, K7M (1.6v8, AC)',
    price: ['6 200 р.', '4 900 р.', '4 400 р.',],
  },
  'lPh2K4M': {
    header: 'Logan Фаза 2, K4M (1.6v16)',
    price: ['6 100 р.', '4 800 р.', '3 700 р.',],
  },
  'lPh2K4MwC': {
    header: 'Logan Фаза 2, K4M (1.6v16, AC)',
    price: ['7 000 р.', '5 300 р.', '4 000 р.',],
  },
  'l2K7M': {
    header: 'Logan 2, K7M (1.6v8, 82 л/с, МКПП)',
    price: [
      '4 100 р. (без свечей) / 5 300 р. (со свечами)',
      '3 600 р. (без свечей) / 4 400 р. (со свечами)',
      '3 200 р. (без свечей) / 3 900 р. (со свечами)',
    ],
  },
  'l2K7MwC': {
    header: 'Logan 2, K7M (1.6v8, 82 л/с, МКПП, AC)',
    price: [
      '4 800 р. (без свечей) / 5 900 р. (со свечами)',
      '4 000 р. (без свечей) / 4 800 р. (со свечами)',
      '3 400 р. (без свечей) / 4 100 р. (со свечами)',
    ],
  },
  'l2K4M': {
    header: 'Logan 2, K4M (1.6v16, 113 л/с, МКПП)',
    price: [
      '5 700 р. (без свечей) / 6 800 р. (со свечами)',
      '4 600 р. (без свечей) / 5 200 р. (со свечами)',
      '3 400 р. (без свечей) / 4 000 р. (со свечами)',
    ],
  },
  'l2K4MACP': {
    header: 'Logan 2, K4M (1.6v16, 102 л/с, АКПП)',
    price: [
      '5 700 р. (без свечей) / 6 800 р. (со свечами)',
      '4 600 р. (без свечей) / 5 200 р. (со свечами)',
      '3 400 р. (без свечей) / 4 000 р. (со свечами)',
    ],
  },
  'sK7J': {
    header: 'Sandero, K7J (1.4v8)',
    price: [
      '5 300 р. (со свечами)',
      '4 400 р. (со свечами)',
      '3 900 р. (со свечами)',
    ],
  },
  'sK7JwC': {
    header: 'Sandero, K7J (1.4v8, AC)',
    price: [
      '6 200 р. (со свечами)',
      '4 900 р. (со свечами)',
      '4 400 р. (со свечами)',
    ],
  },
  'sK7M': {
    header: 'Sandero, K7M (1.6v8)',
    price: [
      '5 300 р. (со свечами)',
      '4 400 р. (со свечами)',
      '3 900 р. (со свечами)',
    ],
  },
  'sK7MwC': {
    header: 'Sandero, K7M (1.6v8, AC)',
    price: [
      '6 200 р. (со свечами)',
      '4 900 р. (со свечами)',
      '4 400 р. (со свечами)',
    ],
  },
  'sK4M': {
    header: 'Sandero, K4M (1.6v16)',
    price: [
      '6 100 р. (со свечами)',
      '4 900 р. (со свечами)',
      '3 800 р. (со свечами)',
    ],
  },
  'sK4MwC': {
    header: 'Sandero, K4M (1.6v16, AC)',
    price: [
      '7 000 р. (со свечами)',
      '5 300 р. (со свечами)',
      '4 100 р. (со свечами)',
    ],
  },
  's2K7M': {
    header: 'Sandero 2, K7M (1.6v8, 82 л/с, МКПП)',
    price: [
      '4 100 р. (без свечей) / 5 300 р. (со свечами)',
      '3 600 р. (без свечей) / 4 400 р. (со свечами)',
      '3 200 р. (без свечей) / 3 900 р. (со свечами)',
    ],
  },
  's2K7MwC': {
    header: 'Sandero 2, K7M (1.6v8, 82 л/с, МКПП, AC)',
    price: [
      '4 800 р. (без свечей) / 5 900 р. (со свечами)',
      '4 000 р. (без свечей) / 4 800 р. (со свечами)',
      '3 400 р. (без свечей) / 4 100 р. (со свечами)',
    ],
  },
  's2K4M': {
    header: 'Sandero 2, K4M (1.6v16, 113 л/с, МКПП)',
    price: [
      '5 700 р. (без свечей) / 6 800 р. (со свечами)',
      '4 600 р. (без свечей) / 5 200 р. (со свечами)',
      '3 400 р. (без свечей) / 4 000 р. (со свечами)',
    ],
  },
  's2K4MACP': {
    header: 'Sandero 2, K4M (1.6v16, 102 л/с, АКПП)',
    price: [
      '5 700 р. (без свечей) / 6 800 р. (со свечами)',
      '4 600 р. (без свечей) / 5 300 р. (со свечами)',
      '3 400 р. (без свечей) / 4 000 р. (со свечами)',
    ],
  },
  'swK7MwC': {
    header: 'Sandero Stepway, K7M (1.6v8, AC)',
    price: [
      '6 200 р. (со свечами)',
      '4 900 р. (со свечами)',
      '4 400 р. (со свечами)',
    ],
  },
  'swK4MwC': {
    header: 'Sandero Stepway, K4M (1.6v16, AC)',
    price: [
      '7 000 р. (со свечами)',
      '5 300 р. (со свечами)',
      '4 100 р. (со свечами)',
    ],
  },
  'sw2K7M': {
    header: 'Sandero Stepway 2, K7M (1.6v8, 82 л/с, МКПП)',
    price: [
      '4 200 р. (без свечей) / 5 300 р. (со свечами)',
      '3 600 р. (без свечей) / 4 400 р. (со свечами)',
      '3 200 р. (без свечей) / 3 900 р. (со свечами)',
    ],
  },
  'sw2K7MwC': {
    header: 'Sandero Stepway 2, K7M (1.6v8, 82 л/с, МКПП, AC)',
    price: [
      '4 800 р. (без свечей) / 5 900 р. (со свечами)',
      '4 000 р. (без свечей) / 4 800 р. (со свечами)',
      '3 400 р. (без свечей) / 4 100 р. (со свечами)',
    ],
  },
  'sw2K4M': {
    header: 'Sandero Stepway 2, K4M (1.6v16, 113 л/с)',
    price: [
      '5 700 р. (без свечей) / 6 800 р. (со свечами)',
      '4 500 р. (без свечей) / 5 200 р. (со свечами)',
      '3 300 р. (без свечей) / 3 900 р. (со свечами)',
    ],
  },
  'fK4M': {
    header: 'Fluence, K4M (1.6, 116 л/с)',
    price: [
      '6 600 р. (без свечей) / 7 700 р. (со свечами)',
      '5 900 р. (без свечей) / 6 600 р. (со свечами)',
      '4 000 р. (без свечей) / 4 600 р. (со свечами)',
    ],
  },
  'fM4R': {
    header: 'Fluence, M4R (2.0, 138 л/с)',
    price: [
      '6 900 р. (без свечей) / 12 600 р. (со свечами)',
      '6 700 р. (без свечей) / 9 300 р. (со свечами)',
      '4 200 р. (без свечей) / 6 800 р. (со свечами)',
    ],
  },
  'fH4M': {
    header: 'Fluence, H4M (1.6 114 л/с)',
    price: [
      '6 600 р. (без свечей) / 12 200 р. (со свечами)',
      '6 000 р. (без свечей) / 8 500 р. (со свечами)',
      '4 000 р. (без свечей) / 6 600 р. (со свечами)',
    ],
  },
};