import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectIsAuth } from 'store/Slice/selectors';
import { SignUpThunk } from 'store/thunk/thunk';

const RegisterPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = body => {
    dispatch(SignUpThunk(body));
  };

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth, navigate]);
  return (
    <>
      <RegisterForm register={handleRegister} />
    </>
  );
};

export default RegisterPage;
