import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { selectIsAuth } from 'store/Slice/selectors';

const PrivatRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);
  const location = useLocation();

  return isAuth ? children : <Navigate to="/login" state={location} />;
};

export default PrivatRoute;
