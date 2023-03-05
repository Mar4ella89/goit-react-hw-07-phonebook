import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6404e2e0eed195a99f78132a.mockapi.io/api/contacts',
});

export const fetchContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};
