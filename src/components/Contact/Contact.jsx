import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';

export const Contact = ({ name, id, number }) => {
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));
  return (
    <li style={{ display: 'flex', alignItems: 'center' }}>
      <p>
        {name}: {number}
      </p>
      <button
        style={{ width: '100px', height: '20px', marginLeft: '16px' }}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
};
