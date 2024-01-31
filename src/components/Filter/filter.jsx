import { useDispatch, useSelector } from 'react-redux';
import css from './filter.module.css'
import { selectFilter } from 'store/Slice/selectors';
import { filterContacts } from 'store/Slice/FilterSlice';
const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterContact = ({ target: { value } }) => {
    dispatch(filterContacts(value));
  };

  return (
    <div className={css.form_filter}>
      <input
        className={css.form_input}
        type="text"
        value={filter}
        onChange={filterContact}
      />
      <label className={css.label}>Search Your Contact</label>
    </div>
  );
};

export default Filter;
