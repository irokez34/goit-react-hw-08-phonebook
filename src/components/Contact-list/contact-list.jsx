import { useDispatch, useSelector } from 'react-redux';
import css from './contact-list.module.css';
import NotificationMessage from 'components/notification-message/NotificationMessage';
import { deleteContactThunk, getContactsThunk } from 'store/thunk/thunk';
import { selectFilter, selectVisibleContacts } from 'store/Slice/selectors';
import { useEffect } from 'react';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(deleteContactThunk(id));
  };
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const contactlist = visibleContacts.map(({ id, name, number }) => (
    <li className={css.item} key={id}>
      <span>
        {name}: {number}
      </span>
      <button
        type="button"
        onClick={() => deleteContact(id)}
        className={css.button}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div className={css.contacts}>
      {visibleContacts.length === 0 ? (
        <NotificationMessage message={`No contact ${filter}`} />
      ) : (
        <ul>{contactlist}</ul>
      )}
    </div>
  );
};

export default ContactList;
