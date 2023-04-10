import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>
        Please enter your credentials below to access the AI SP500 Predictor
        dashboard and start benefiting from our powerful AI-driven insights.
      </p>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
