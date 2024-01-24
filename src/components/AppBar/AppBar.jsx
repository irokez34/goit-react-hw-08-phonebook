import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
// import { useSelector } from 'react-redux';
import css from './AppBar.module.css'
export const AppBar = () => {
  // const isLoggedIn = useSelector();
  return (
    <header className={css.header}>
      <Navigation />
      {/* {isLoggedIn ? <UserMenu/> : <AuthNav/>} */}
      <AuthNav />
    </header>
  );
};
 