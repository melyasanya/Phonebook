import { Contact } from 'components/Contact/Contact';

import { useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';

export const Contacts = () => {
  const { contacts } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);

  const filterNames = () =>
    contacts.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <ul>
      {filterNames().map(el => {
        return (
          <Contact name={el.name} key={el.id} id={el.id} number={el.number} />
        );
      })}
    </ul>
  );
};
