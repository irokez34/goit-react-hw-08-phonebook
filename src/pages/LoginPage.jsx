import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { LogInThunk } from 'store/thunk/thunk';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = body => {
    dispatch(LogInThunk(body)).then(response => {
      if (response.type.endsWith('fulfilled')) {
        alert(`Welcome `);
        navigate('/');
      } else {
        alert('Неправильні данні');
      }
    });
  };

  return (
    <>
      <LoginForm login={handleLogin} />
    </>
  );
};
export default LoginPage;
