import { fetchContacts, addContact, deleteContact } from 'services/contacts';

import * as actions from './contact-actions';

export const fetchAllContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchAllContactsLoading());
      const data = await fetchContacts();

      dispatch(actions.fetchAllContactsSuccess(data));
    } catch ({ response }) {
      dispatch(actions.fetchAllContactsError(response.data.message));
    }
  };
  return func;
};

const isDublicate = (contacts, { name, number }) => {
  const normalizedName = name.toLowerCase();
  const normalizedNumber = number.toLowerCase();

  const contactData = contacts.find(({ name, number }) => {
    return (
      name.toLowerCase() === normalizedName ||
      number.toLowerCase() === normalizedNumber
    );
  });

  return Boolean(contactData);
};

export const fetchAddContact = data => {
  const func = async (dispatch, getState) => {
    try {
      const { contacts } = getState();

      if (isDublicate(contacts.items, data)) {
        alert(
          `Name ${data.name} or number ${data.number} is already in contacts`
        );
        return false;
      }
      dispatch(actions.fetchAddContactLoading());
      const result = await addContact(data);
      dispatch(actions.fetchAddContactSuccess(result));
    } catch ({ response }) {
      dispatch(actions.fetchAddContactError(response.data.message));
    }
  };
  return func;
};

export const fetchDeleteContacts = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchDeleteContactLoading());
      await deleteContact(id);
      dispatch(actions.fetchDeleteContactSuccess(id));
    } catch ({ response }) {
      dispatch(actions.fetchDeleteContactError(response.data.message));
    }
  };
  return func;
};
