import { createAction } from '@reduxjs/toolkit';

export const fetchAllContactsSuccess = createAction('contacts/fetch/success');
export const fetchAllContactsError = createAction('contacts/fetch/error');
export const fetchAllContactsLoading = createAction('contacts/fetch/loading');
