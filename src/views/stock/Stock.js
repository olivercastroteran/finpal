import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Stock.scss';

const Stock = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const history = useHistory();

  if (!auth.uid) history.push('/auth');

  return (
    <div className="stock content">
      <h1>Stock</h1>
    </div>
  );
};

export default Stock;
