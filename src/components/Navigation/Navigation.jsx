// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'
export const Navigation = () => {
  // const isLoggedIn = useSelector();
  return (
    <nav >
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <NavLink className={css.link} to="/contacts">
        Contacts
      </NavLink>
      {/* {isLoggedIn && <NavLink className="" to="/contacts"></NavLink>} */}
    </nav>
  );
};
