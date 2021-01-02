import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { english, spanish } from '../../../languages';
import { demoLogin, login } from '../../../store/actions/authActions';
import { HideIcon, LookIcon } from '../../../assets/icons';
import Spinner from '../../../components/UI/spinner/Spinner';

const Login = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const language = useSelector((state) => state.settings.language);
  const authError = useSelector((state) => state.auth.authError);
  const [content, setContent] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.login });
    } else if (language === 'spanish') {
      setContent({ ...spanish.login });
    }
  }, [language]);

  useEffect(() => {
    setIsLoading(false);
  }, [authError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    if (!auth.uid) {
      setIsLoading(true);
    }
  };

  const handleDemoLogin = () => {
    dispatch(demoLogin());
    if (!auth.uid) {
      setIsLoading(true);
    }
  };

  return (
    <form className="form login" onSubmit={handleSubmit}>
      <h2>{content?.title}</h2>

      <div className="input-field">
        <input
          type="email"
          placeholder="Email"
          id="email"
          autoComplete="off"
          onChange={(e) => {
            //checkValidation();
            setEmail(e.target.value);
          }}
          value={email}
          required
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className="input-field">
        <input
          type={isHidePassword ? 'password' : 'text'}
          placeholder="Password"
          id="password"
          autoComplete="off"
          onChange={(e) => {
            //checkValidation();
            setPassword(e.target.value);
          }}
          value={password}
          required
        />
        <label htmlFor="password">Password</label>
        {isHidePassword ? (
          <HideIcon
            className="input-field__svg"
            onClick={() => setIsHidePassword(false)}
          />
        ) : (
          <LookIcon
            className="input-field__svg"
            onClick={() => setIsHidePassword(true)}
          />
        )}
      </div>

      <div className="input-field">
        <button className="form__btn">{content?.btn}</button>
        <button
          className="form__btn demo"
          type="button"
          onClick={handleDemoLogin}
        >
          {content?.demo}
        </button>
      </div>

      {isLoading && <Spinner />}

      {authError && <p className="error-msg second">{authError}</p>}
    </form>
  );
};

export default Login;
