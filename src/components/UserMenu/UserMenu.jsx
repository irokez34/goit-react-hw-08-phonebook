import { useDispatch, useSelector } from 'react-redux';

import css from './UserMenu.module.css';
import { selectUser } from 'store/Slice/selectors';
import { LogOutThunk } from 'store/thunk/thunk';
import { useNavigate } from 'react-router';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const handleClick = e => {
    dispatch(LogOutThunk());
    navigate('/');
  };
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={handleClick} className={css.button}>
        Logout
      </button>
    </div>
  );
};
