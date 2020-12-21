import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/actions/authActions';
import './User.scss';

const User = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  if (!auth.uid) history.push('/auth');

  return (
    <div className="user content">
      <h1>User</h1>
      <button onClick={() => dispatch(logout())} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default User;
