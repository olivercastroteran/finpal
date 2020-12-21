import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  const uid = useSelector((state) => state.firebase.auth.uid);
  const history = useHistory();

  useEffect(() => {
    if (!uid) history.push('/auth');
    // eslint-disable-next-line
  }, [uid]);

  return (
    <div className="not-found content">
      <h1>Error</h1>
    </div>
  );
};

export default NotFound;
