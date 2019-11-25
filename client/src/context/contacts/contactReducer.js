import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';
import { useReducer } from 'react';

export default (action, state) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state
      };

    default:
      return { state };
  }
};
