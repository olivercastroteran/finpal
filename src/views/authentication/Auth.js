import { useState } from 'react';
import './Auth.scss';
import { useSelector } from 'react-redux';
import Login from './login/Login';
import Signup from './signup/Signup';

const Auth = () => {
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(false);

  return (
    <div className={isDarkMode ? 'auth content dark' : 'auth content'}>
      <div className="auth__container">
        <div className="auth__container--switch">
          <button
            className={login ? 'auth-btn left active' : 'auth-btn left'}
            onClick={() => {
              setSignup(false);
              setLogin(true);
            }}
          >
            Login
          </button>
          <button
            className={signup ? 'auth-btn right active' : 'auth-btn right'}
            onClick={() => {
              setLogin(false);
              setSignup(true);
            }}
          >
            Signup
          </button>
        </div>

        {login && <Login />}
        {signup && <Signup />}
      </div>
    </div>
  );
};

export default Auth;
