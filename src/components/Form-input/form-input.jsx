import React, { useState } from 'react';

import css from './form-input.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContactThunk } from 'store/thunk/thunk';
import { selectContacts } from 'store/Slice/selectors';

const FormInput = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleChange = e => {
    const { value, name } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const isContact = contacts.find(el => el.number === number);
    if (isContact) {
      setName('');
      setNumber('');
      return alert('Контакт Існує');
    }

    const data = {
      name: name,
      number: number,
    };
    dispatch(addNewContactThunk(data));
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.input_container}>
        <div className={css.input_name}>
          <input
            type="text"
            name="name"
            className={css.input_form}
            value={name}
            onChange={handleChange}
            required
          />
          <label className={css.label}>Name</label>
        </div>
        <div className={css.input_number}>
          <input
            type="tel"
            name="number"
            className={css.input_form}
            value={number}
            onChange={handleChange}
            required
          />
          <label className={css.label}>Number</label>
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default FormInput;
