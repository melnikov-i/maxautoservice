import { combineReducers } from 'redux';

import {
  
} from '@src/interfaces';

import {

} from '@src/redux/login';

export type State = {
  readonly Hello: string,
};

export const reducer = combineReducers({
  Hello: ( state = 'Hello', action ) => {
    switch ( action.type ) {
      default:
        return state;
    }
  },
});