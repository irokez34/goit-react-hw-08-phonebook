import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './Layout/Layout';
import { Loader } from './Loading/Loader';
import { Error } from './Error/error';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'store/Slice/selectors';
import { RefreshUserThunk } from 'store/thunk/thunk';
import PrivatRoute from './guards/PrivatRoute';
import PubliceRoute from './guards/PubliceRoute';
const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  RefreshUserThunk();
  useEffect(() => {
    dispatch(RefreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing User ....</b>
  ) : (
    <>
      <Loader />
      <Error />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PubliceRoute>
                <RegisterPage />
              </PubliceRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PubliceRoute>
                <LoginPage />
              </PubliceRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivatRoute>
                <ContactsPage />
              </PrivatRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
