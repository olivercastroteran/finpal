import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HideIcon, LookIcon } from '../../../assets/icons';
import { english, spanish } from '../../../languages';

const Login = () => {
  const language = useSelector((state) => state.settings.language);
  const [isFormValid, setIsFormValid] = useState(false);
  const [content, setContent] = useState({});
  const [isHidePassword, setIsHidePassword] = useState(true);
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

    setUser({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      secretKey: '',
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const checkValidation = useCallback(() => {
    const { firstName, lastName, email, password, password2, secretKey } = user;
    if (
      firstName.length >= 3 &&
      lastName.length >= 3 &&
      email &&
      password.length >= 6 &&
      password === password2 &&
      secretKey.length >= 4
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [user]);

  useEffect(() => {
    checkValidation();
  }, [checkValidation]);

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
          className={user.firstName.length < 3 ? 'error' : ''}
          onChange={(e) => {
            checkValidation();
            handleChange(e);
          }}
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
          className={user.lastName.length < 3 ? 'error' : ''}
          onChange={(e) => {
            checkValidation();
            handleChange(e);
          }}
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
          onChange={(e) => {
            checkValidation();
            handleChange(e);
          }}
          value={user.email}
          required
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className="input-field">
        <input
          type={isHidePassword ? 'password' : 'text'}
          placeholder="Password"
          id="password"
          name="password"
          autoComplete="off"
          className={user.password.length < 6 ? 'error' : ''}
          onChange={(e) => {
            checkValidation();
            handleChange(e);
          }}
          value={user.password}
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
        <input
          type={isHidePassword ? 'password' : 'text'}
          placeholder={content?.password2}
          id="password2"
          name="password2"
          autoComplete="off"
          className={user.password2 === user.password ? '' : 'error'}
          onChange={(e) => {
            checkValidation();
            handleChange(e);
          }}
          value={user.password2}
          required
        />
        <label htmlFor="password2">{content?.password2}</label>
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
        <input
          type="number"
          placeholder={content?.secretKey}
          id="secretKey"
          name="secretKey"
          autoComplete="off"
          className={user.secretKey.length < 4 ? 'error' : ''}
          onChange={(e) => {
            checkValidation();
            handleChange(e);
          }}
          value={user.secretKey}
          required
        />
        <label htmlFor="secretKey">{content?.secretKey}</label>
      </div>

      <div className="input-field">
        <button className="form__btn" disabled={!isFormValid}>
          {content?.btn}
        </button>
      </div>
    </form>
  );
};

export default Login;
