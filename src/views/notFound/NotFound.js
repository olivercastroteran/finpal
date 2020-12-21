import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const history = useHistory();

  if (!auth.uid) history.push('/auth');

  return (
    <div className="not-found content">
      <h1>Error</h1>
    </div>
  );
};

export default NotFound;
