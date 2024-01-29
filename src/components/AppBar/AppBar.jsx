import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import css from './AppBar.module.css';
import { selectIsLoggedIn } from 'store/Slice/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
