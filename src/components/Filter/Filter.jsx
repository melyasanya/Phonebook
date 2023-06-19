import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const { filter } = useSelector(getFilter);

  const dispatch = useDispatch();

  const getFilterInput = e => {
    dispatch(addFilter(e.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={getFilterInput}
        value={filter}
      />
    </>
  );
};
