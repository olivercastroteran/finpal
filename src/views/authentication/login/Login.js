import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, setEmail });
  };

  return (
    <form className="form login" onSubmit={handleSubmit}>
      <h2>Login</h2>

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
        <button className="form__btn">Login</button>
      </div>
    </form>
  );
};

export default Login;
