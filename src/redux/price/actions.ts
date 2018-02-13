import {
  CollectionContain
} from '@src/interfaces';

export const SELECT_CURRENT_MODEL = 
  'SELECT_CURRENT_MODEL';
export const CLEAN_THIS_ITEM =
  'CLEAN_THIS_ITEM';
export const SELECT_CURRENT_PRICE =
  'SELECT_CURRENT_PRICE';

export type Actions = {
  SELECT_CURRENT_MODEL: {
    type: typeof SELECT_CURRENT_MODEL,
    payload: CollectionContain['id'],
  },
  CLEAN_THIS_ITEM: {
    type: typeof CLEAN_THIS_ITEM,
  },
  SELECT_CURRENT_PRICE: {
    type: typeof SELECT_CURRENT_PRICE,
    payload: string,
  }
};

export const syncActionCreators = {
  selectCurrentModel:
  ( payload: CollectionContain['id'] ):
  Actions[typeof SELECT_CURRENT_MODEL] => ({
    type: SELECT_CURRENT_MODEL, payload,
  }),
  cleanCurrentModel: ():
  Actions[typeof CLEAN_THIS_ITEM] => ({
    type: CLEAN_THIS_ITEM,
  }),
  selectCurrentPrice:
  ( payload: string ):
  Actions[typeof SELECT_CURRENT_PRICE] => ({
    type: SELECT_CURRENT_PRICE, payload
  }),
};