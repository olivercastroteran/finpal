import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { english, spanish } from '../../../languages';

const Login = () => {
  const language = useSelector((state) => state.settings.language);
  const [content, setContent] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.login });
    } else if (language === 'spanish') {
      setContent({ ...spanish.login });
    }
  }, [language]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });

    setEmail('');
    setPassword('');
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
    </form>
  );
};

export default Login;
