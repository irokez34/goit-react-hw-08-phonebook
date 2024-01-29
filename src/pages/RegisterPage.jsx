import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { SignUpThunk } from 'store/thunk/thunk';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegister = body => {
    dispatch(SignUpThunk(body));
  };

  return (
    <>
      <RegisterForm register={handleRegister} />
    </>
  );
};

export default RegisterPage;
