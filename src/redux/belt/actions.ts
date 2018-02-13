import {
  CollectionContain
} from '@src/interfaces';

export const SELECT_CURRENT_BELT_MODEL = 
  'SELECT_CURRENT_BELT_MODEL';
export const CLEAN_THIS_BELT_ITEM =
  'CLEAN_THIS_BELT_ITEM';
export const SELECT_CURRENT_BELT =
  'SELECT_CURRENT_BELT';

export type Actions = {
  SELECT_CURRENT_BELT_MODEL: {
    type: typeof SELECT_CURRENT_BELT_MODEL,
    payload: CollectionContain['id'],
  },
  CLEAN_THIS_BELT_ITEM: {
    type: typeof CLEAN_THIS_BELT_ITEM,
  },
  SELECT_CURRENT_BELT: {
    type: typeof SELECT_CURRENT_BELT,
    payload: string,
  }
};

export const syncActionCreators = {
  selectCurrentBeltModel:
  ( payload: CollectionContain['id'] ):
  Actions[typeof SELECT_CURRENT_BELT_MODEL] => ({
    type: SELECT_CURRENT_BELT_MODEL, payload,
  }),
  cleanCurrentBeltModel: ():
  Actions[typeof CLEAN_THIS_BELT_ITEM] => ({
    type: CLEAN_THIS_BELT_ITEM,
  }),
  selectCurrentBelt:
  ( payload: string ):
  Actions[typeof SELECT_CURRENT_BELT] => ({
    type: SELECT_CURRENT_BELT, payload
  }),
};