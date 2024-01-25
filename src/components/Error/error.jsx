import { useSelector } from 'react-redux';
import css from './error.module.css';
import { selectError } from 'store/Slice/selectors';
export const Error = () => {
  const error = useSelector(selectError);

  return <div className={css.error}>{error && <h2>Error: {error}</h2>}</div>;
};
