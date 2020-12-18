import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { english, spanish } from '../../../languages';

const Login = () => {
  const language = useSelector((state) => state.settings.language);
  const [content, setContent] = useState({});
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    secretKey: '',
  });

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.signup });
    } else if (language === 'spanish') {
      setContent({ ...spanish.signup });
    }
  }, [language]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      className="form login"
      onSubmit={handleSubmit}
      autoComplete="off"
      onKeyPress={(e) => {
        if (e.which === 13) {
          e.preventDefault();
        }
      }}
    >
      <h2>{content?.title}</h2>

      <div className="input-field">
        <input
          type="text"
          placeholder={content?.firstName}
          id="firstName"
          name="firstName"
          autoComplete="off"
          onChange={handleChange}
          value={user.firstName}
          required
        />
        <label htmlFor="firstName">{content?.firstName}</label>
      </div>

      <div className="input-field">
        <input
          type="text"
          placeholder={content?.lastName}
          id="lastName"
          name="lastName"
          autoComplete="off"
          onChange={handleChange}
          value={user.lastName}
          required
        />
        <label htmlFor="lastName">{content?.lastName}</label>
      </div>

      <div className="input-field">
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          autoComplete="off"
          onChange={handleChange}
          value={user.email}
          required
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className="input-field">
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          autoComplete="off"
          onChange={handleChange}
          value={user.password}
          required
        />
        <label htmlFor="password">Password</label>
      </div>

      <div className="input-field">
        <input
          type="password"
          placeholder={content?.password2}
          id="password2"
          name="password2"
          autoComplete="off"
          onChange={handleChange}
          value={user.password2}
          required
        />
        <label htmlFor="password2">{content?.password2}</label>
      </div>

      <div className="input-field">
        <input
          type="password"
          placeholder={content?.secretKey}
          id="secretKey"
          name="secretKey"
          autoComplete="off"
          onChange={handleChange}
          value={user.secretKey}
          required
        />
        <label htmlFor="secretKey">{content?.secretKey}</label>
      </div>

      <div className="input-field">
        <button className="form__btn">{content?.btn}</button>
      </div>
    </form>
  );
};

export default Login;
