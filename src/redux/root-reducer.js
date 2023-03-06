import { combineReducers } from '@reduxjs/toolkit';

import contactsSlice from './contacts/contact-slice';
import filterSlice from './filter/filter-slice';

export const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filterSlice,
});
