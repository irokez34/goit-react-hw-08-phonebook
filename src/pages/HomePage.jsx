import { HomeModal } from 'components/HomeNoAuth/HomeModal';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'store/Slice/selectors';

const Home = () => {
  const isAuth = useSelector(selectIsAuth);

  return !isAuth ? <HomeModal /> : <div>asd</div>;
  // <HomeContent></HomeContent>
};

export default Home;
