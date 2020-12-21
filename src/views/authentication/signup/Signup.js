import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HideIcon, LookIcon } from '../../../assets/icons';
import { signup } from '../../../store/actions/authActions';
import Spinner from '../../../components/UI/spinner/Spinner';
import { re } from '../../../shared/utility';
import { english, spanish } from '../../../languages';

const Login = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const authError = useSelector((state) => state.auth.authError);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.settings.language);
  const [isFormValid, setIsFormValid] = useState(false);
  const [content, setContent] = useState({});
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    pin: '',
  });

  useEffect(() => {
    if (language === 'english') {
      setContent({ ...english.signup });
    } else if (language === 'spanish') {
      setContent({ ...spanish.signup });
    }
  }, [language]);

  useEffect(() => {
    setIsLoading(false);
  }, [authError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(user));

    if (!auth.uid) {
      setIsLoading(true);
    }

    setUser({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      pin: '',
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const checkValidation = useCallback(() => {
    const { firstName, lastName, email, password, password2, pin } = user;
    if (
      firstName.length >= 3 &&
      lastName.length >= 3 &&
      email &&
      password.length >= 6 &&
      password === password2 &&
      pin.length === 4
    ) {
      setErrorMsg(null);
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
            if (e.target.value.length < 3) {
              setErrorMsg(content?.errMsg?.firstName);
            } else {
              setErrorMsg(null);
            }
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
            if (e.target.value.length < 3) {
              setErrorMsg(content?.errMsg?.lastName);
            } else {
              setErrorMsg(null);
            }
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
          className={!re.test(user.email) ? 'error' : ''}
          onChange={(e) => {
            checkValidation();
            handleChange(e);
            if (!re.test(e.target.value.trim())) {
              setErrorMsg(content?.errMsg?.email);
            } else {
              setErrorMsg(null);
            }
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
            if (e.target.value.length < 6) {
              setErrorMsg(content?.errMsg?.password);
            } else {
              setErrorMsg(null);
            }
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
            if (e.target.value !== user.password) {
              setErrorMsg(content?.errMsg?.password2);
            } else {
              setErrorMsg(null);
            }
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
          placeholder={content?.pin}
          id="pin"
          name="pin"
          autoComplete="off"
          className={user.pin.length !== 4 ? 'error' : ''}
          onChange={(e) => {
            checkValidation();
            handleChange(e);
            if (e.target.value.length !== 4) {
              setErrorMsg(content?.errMsg?.pin);
            } else {
              setErrorMsg(null);
            }
          }}
          value={user.pin}
          required
        />
        <label htmlFor="pin">{content?.pin}</label>
      </div>

      <div className="input-field">
        <button className="form__btn" disabled={!isFormValid}>
          {content?.btn}
        </button>
      </div>

      {isLoading && <Spinner />}

      {errorMsg && <p className="error-msg">{errorMsg}</p>}
      {authError && <p className="error-msg second">{authError}</p>}
    </form>
  );
};

export default Login;
