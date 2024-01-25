import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './Layout/Layout';
import { Loader } from './Loading/Loader';
import { Error } from './Error/error';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'store/Slice/selectors';
import { RefreshUserThunk } from 'store/thunk/thunk';
const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
export const App = () => {
  const dispatch = useDispatch();
  const profile = useSelector(selectUser);
  useEffect(() => {
    !profile && dispatch(RefreshUserThunk());
  }, [dispatch, profile]);

  return (
    <>
      <Loader />
      <Error />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
};
