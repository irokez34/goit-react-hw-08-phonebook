import { useSelector } from 'react-redux';
import { selectError } from 'store/Slice/selectors';
import css from './error.module.css';
export const Error = () => {
  const error = useSelector(selectError);
  return <div className={css.error}>{error && <h2>Error: {error}</h2>}</div>;
};
