import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { InputForm } from 'components/InputForm/InputForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/selectors';

export const ContactsWrapper = () => {
  const { contacts } = useSelector(getContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <InputForm />
      <h1>Contacts</h1>
      <Filter />
      {contacts.length > 0 && <Contacts />}
    </>
  );
};
