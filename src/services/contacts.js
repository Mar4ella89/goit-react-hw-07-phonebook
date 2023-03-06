import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6404e2e0eed195a99f78132a.mockapi.io/api/contacts',
});

export const fetchContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
