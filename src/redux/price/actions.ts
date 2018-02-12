import {
  ModelCollectionItemInterface
} from '@src/interfaces';

export const SELECT_CURRENT_MODEL = 
  'SELECT_CURRENT_MODEL';

export type Actions = {
  SELECT_CURRENT_MODEL: {
    type: typeof SELECT_CURRENT_MODEL,
    payload: string,
  }
};

export const syncActionCreators = {
  selectCurrentModel:
  ( payload: ModelCollectionItemInterface['name'] ):
  Actions[typeof SELECT_CURRENT_MODEL] => ({
    type: SELECT_CURRENT_MODEL, payload,
  }),
};