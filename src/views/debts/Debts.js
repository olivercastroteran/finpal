import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Debts.scss';

const Debts = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const history = useHistory();

  if (!auth.uid) history.push('/auth');

  return (
    <div className="debts content">
      <h1>Debts</h1>
    </div>
  );
};

export default Debts;
