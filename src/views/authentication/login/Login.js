import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { english, spanish } from '../../../languages';
import { login } from '../../../store/actions/authActions';

const Login = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const history = useHistory();
  const language = useSelector((state) => state.settings.language);
  const authError = useSelector((state) => state.auth.authError);
  const [content, setContent] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.login });
    } else if (language === 'spanish') {
      setContent({ ...spanish.login });
    }
  }, [language]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  if (auth.uid) history.push('/');

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
          type="password"
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
      </div>

      <div className="input-field">
        <button className="form__btn">{content?.btn}</button>
      </div>

      {authError && <p className="error-msg">{authError}</p>}
    </form>
  );
};

export default Login;
