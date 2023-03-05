import ContactForm from 'modules/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import css from './ContactBooks.module.css';

const ContactBooks = () => {
  return (
    <div className={css.container}>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div>
        <h2>Contacts</h2>

        <Filter />

        <ContactList />
      </div>
    </div>
  );
};

export default ContactBooks;
