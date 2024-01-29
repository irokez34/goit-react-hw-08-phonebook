import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { selectIsAuth } from 'store/Slice/selectors';

const PubliceRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);
  const { state: prevLocation } = useLocation();

  return !isAuth ? children : <Navigate to={prevLocation ?? '/'} />;
};

export default PubliceRoute;
