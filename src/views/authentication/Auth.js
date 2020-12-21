import { useEffect, useState } from 'react';
import './Auth.scss';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Login from './login/Login';
import Signup from './signup/Signup';

const Auth = () => {
  const uid = useSelector((state) => state.firebase.auth.uid);
  const isDarkMode = useSelector((state) => state.settings.isDarkMode);
  const language = useSelector((state) => state.settings.language);
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (uid) history.push('/');
    // eslint-disable-next-line
  }, [uid]);

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
            {language === 'english' ? 'Login' : 'Acceder'}
          </button>
          <button
            className={signup ? 'auth-btn right active' : 'auth-btn right'}
            onClick={() => {
              setLogin(false);
              setSignup(true);
            }}
          >
            {language === 'english' ? 'Signup' : 'Registrarse'}
          </button>
        </div>

        {login && <Login />}
        {signup && <Signup />}
      </div>
    </div>
  );
};

export default Auth;
