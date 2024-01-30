import { useEffect } from 'react';
import css from './Modal.module.css';
import { NavLink } from 'react-router-dom';

export const Modal = ({  onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleDropClick = e => {
    if (e.currentTarget === e.target) {
      return onClose();
    }
  };
  return (
    <div className={css.Overlay} onClick={handleDropClick}>
      <div className={css.Modal}>
        <div className={css.info}>
          <h2 className={css.head_text}>Welcome User</h2>
          <p className={css.text_info}>You need to be logged in to use this App</p>
          <button onClick={onClose}>X</button>
          <NavLink to="/login" className={css.links}>
            Login
          </NavLink>
          <NavLink to="register" className={css.links}>
            Register
          </NavLink>
          <p className={css.text_info}>
            This application was created for users who want their contacts to be
            saved not only on their phone, but also on their personal computer
            browser
          </p>
        </div>
      </div>
    </div>
  );
};
