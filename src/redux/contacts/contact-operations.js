import { fetchContacts } from 'services/contacts';

import actions, {
  fetchAllContactsLoading,
  fetchAllContactsSuccess,
} from './contact-actions';

const fetchAllContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(fetchAllContactsLoading());
      const data = await fetchContacts();
      dispatch(fetchAllContactsSuccess(data));
    } catch (error) {}
  };
  return func;
};
