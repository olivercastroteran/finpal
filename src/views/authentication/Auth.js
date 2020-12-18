import { useState } from 'react';
import './Auth.scss';
import { useSelector } from 'react-redux';

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

        {login && <h2>Login</h2>}
        {signup && <h2>Signup</h2>}
      </div>
    </div>
  );
};

export default Auth;
