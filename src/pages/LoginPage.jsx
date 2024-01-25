import { LoginForm } from 'components/LoginForm/LoginForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectIsAuth } from 'store/Slice/selectors';
import { LogInThunk } from 'store/thunk/thunk';

const LoginPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = body => {
    dispatch(LogInThunk(body));
  };

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth, navigate]);
  return (
    <>
      <LoginForm login={handleLogin}/>
    </>
  );
};
export default LoginPage;
