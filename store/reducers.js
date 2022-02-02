/* eslint-disable default-param-last */
import { combineReducers } from 'redux';
import * as types from './types';

// COUNTER REDUCER
const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    case types.RESET:
      return 0;
    default:
      return state;
  }
};

// QUOTE OF THE DAY
const quoteOfTheDayReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.SET_QUOTE:
      return {
        quote: payload.quote,
        author: payload.author,
      };
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  quoteOfTheDay: quoteOfTheDayReducer,
};

export default combineReducers(reducers);
