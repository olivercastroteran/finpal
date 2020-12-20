import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/authActions';
import './User.scss';

const User = () => {
  const dispatch = useDispatch();

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
