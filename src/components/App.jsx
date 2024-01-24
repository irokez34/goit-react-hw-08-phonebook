import { Loader } from './Loading/Loader';
import { Error } from './Error/error';
import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './Layout/Layout';
const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
export const App = () => {
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
