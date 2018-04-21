import {
  CollectionContain,
  BeltModificationsCollectionInterface,
} from '@src/interfaces';

export const BeltModelCollection: CollectionContain[] = [
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
];

export const BeltModificationsCollection: 
BeltModificationsCollectionInterface = {
  default: {
    header: '',
    phases: [
      {
        phaseHeader: '',
        modifications: [],
      }
    ]
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
            id: 'lPh2K7JwG',
            value: 'K7J (1.4v8, ГУР)',
          },
          {
            id: 'lPh2K7JwC',
            value: 'K7J (1.4v8, AC, ГУР)',
          },
          {
            id: 'lPh2K7M',
            value: 'K7M (1.6v8), ГУР',
          },
          {
            id: 'lPh2K7MwC',
            value: 'K7M (1.6v8, AC), ГУР',
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
            value: 'K7M (1.6v8)'
          },
          {
            id: 'l2K7MwC',
            value: 'K7M (1.6v8, AC)'
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
            id: 'sK7JwG',
            value: 'K7J (1.4v8, ГУР)',
          },
          {
            id: 'sK7JwC',
            value: 'K7J (1.4v8, AC, ГУР)',
          },
          {
            id: 'sK7M',
            value: 'K7M (1.6v8, ГУР)',
          },
          {
            id: 'sK7MwC',
            value: 'K7M (1.6v8, AC, ГУР)',
          },
          {
            id: 'sK4M',
            value: 'K4M (1.6v16, ГУР)',
          },
          {
            id: 'sK4MwC',
            value: 'K4M (1.6v16, AC, ГУР)',
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
            value: 'K4M (1.6v16, МКПП)'
          },
          {
            id: 's2K4MACP',
            value: 'K4M (1.6v16, АКПП)'
          },
        ],
      },
    ],
  },
};

export const Belt = {
  'lPh1K7J': {
    header: 'Logan Фаза 1, K7J (1.4v8)',
    price: ['8 950 р.', '6 300 р.'],
  },
  'lPh1K7M': {
    header: 'Logan Фаза 1, K7M (1.6v8)',
    price: ['8 950 р.', '6 300 р.'],
  },
  'lPh1K7JwC': {
    header: 'Logan Фаза 1, K7J (1.4v8, AC)',
    price: ['10 050 р.', '7 230 р.'],
  },
  'lPh1K7MwC': {
    header: 'Logan Фаза 1, K7M (1.6v8, AC)',
    price: ['10 050 р.', '7 230 р.'],
  },
  'lPh1K4M': {
    header: 'Logan Фаза 1, K4M (1.6v16)',
    price: ['11 920 р.', '8 980 р.'],
  },
  'lPh1K4MwC': {
    header: 'Logan Фаза 1, K4M (1.6v16, AC)',
    price: ['12 780 р.', '9 580 р.'],
  },
  'lPh2K7J': {
    header: 'Logan Фаза 2, K7J (1.4v8)',
    price: ['5 790 р.',  '-'],
  },
  'lPh2K7JwG': {
    header: 'Logan Фаза 2, K7J (1.4v8, ГУР)',
    price: ['9 960 р.', '7 310 р.'],
  },
  'lPh2K7JwC': {
    header: 'Logan Фаза 2, K7J (1.4v8, AC, ГУР)',
    price: ['10 920 р.', '8 020 р.'],
  },
  'lPh2K7M': {
    header: 'Logan Фаза 2, K7M (1.6v8), ГУР',
    price: ['9 960 р.', '7 310 р.'],
  },
  'lPh2K7MwC': {
    header: 'Logan Фаза 2, K7M (1.6v8, AC, ГУР)',
    price: ['10 920 р.', '8 020 р.'],
  },
  'lPh2K4M': {
    header: 'Logan Фаза 2, K4M (1.6v16)',
    price: ['11 920 р.', '8 980 р.'],
  },
  'lPh2K4MwC': {
    header: 'Logan Фаза 2, K4M (1.6v16, AC)',
    price: ['12 780 р.', '9 580 р.'],
  },


  'l2K7M': {
    header: 'Logan 2, K7M (1.6v8)',
    price: [
      '6 670 р.',
      '-',
    ],
  },
  'l2K7MwC': {
    header: 'Logan 2, K7M (1.6v8, AC)',
    price: [
      '10 920 р.',
      '8 020 р.',
    ],
  },
  'l2K4M': {
    header: 'Logan 2, K4M (1.6v16, МКПП)',
    price: [
      '12 780 р.',
      '9 580 р.',
    ],
  },
  'l2K4MACP': {
    header: 'Logan 2, K4M (1.6v16, АКПП)',
    price: [
      '12 780 р.',
      '9 680 р.',
    ],
  },


  'sK7J': {
    header: 'Sandero, K7J (1.4v8)',
    price: [
      '5 790 р.',
      '-',
    ],
  },
  'sK7JwG': {
    header: 'Sandero, K7J (1.4v8, ГУР)',
    price: [
      '9 960 р.',
      '7 310 р.',
    ],
  },
  'sK7JwC': {
    header: 'Sandero, K7J (1.4v8, AC, ГУР)',
    price: [
      '10 920 р.',
      '8 020 р.',
    ],
  },
  'sK7M': {
    header: 'Sandero, K7M (1.6v8, ГУР)',
    price: [
      '9 960 р.',
      '7 310 р.',
    ],
  },
  'sK7MwC': {
    header: 'Sandero, K7M (1.6v8, AC, ГУР)',
    price: [
      '10 920 р.',
      '8 020 р.',
    ],
  },
  'sK4M': {
    header: 'Sandero, K4M (1.6v16, ГУР)',
    price: [
      '11 920 р.',
      '8 980 р.',
    ],
  },
  'sK4MwC': {
    header: 'Sandero, K4M (1.6v16, AC, ГУР)',
    price: [
      '12 780 р.',
      '9 580 р.',
    ],
  },
  's2K7M': {
    header: 'Sandero 2, K7M (1.6v8)',
    price: [
      '6 670 р.',
       '-',
    ],
  },
  's2K7MwC': {
    header: 'Sandero 2, K7M (1.6v8, AC)',
    price: [
      '10 920 р.',
      '8 020 р.',
    ],
  },
  's2K4M': {
    header: 'Sandero 2, K4M (1.6v16, МКПП)',
    price: [
      '12 780 р.',
      '9 580 р.',
    ],
  },
  's2K4MACP': {
    header: 'Sandero 2, K4M (1.6v16, АКПП)',
    price: [
      '12 780 р.',
      '9 580 р.',
    ],
  },
};