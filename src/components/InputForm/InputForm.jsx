import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/selectors';

export const InputForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts } = useSelector(getContacts);

  const dispatch = useDispatch();

  const getName = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };

  const addThisContact = (name, number) => {
    const contact = { name, number };
    const isFound = contacts.find(el => el.name === name);
    isFound
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(contact));
  };

  const onSubmit = e => {
    e.preventDefault();
    addThisContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <>
      <form
        action=""
        style={{
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
        onSubmit={onSubmit}
      >
        <TextField id="standard-basic" label="Name" variant="standard" />

        {/* <h3>Name</h3>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={getName}
            value={name}
          />
        </label> */}
        <TextField id="standard-basic" label="Number" variant="standard" />
        {/* <h3>Number</h3>
        <label htmlFor="number">
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={getName}
            value={number}
          />
        </label> */}
        <Button variant="contained" color="success" size="medium">
          Add Contact
        </Button>
        {/* <button type="submit" style={{ width: '100px', marginTop: '16px' }}>
          
        </button> */}
      </form>
    </>
  );
};
