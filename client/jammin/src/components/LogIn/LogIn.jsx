import React, { useState } from 'react';
import apiService from '../../ApiService';
import './login.css';

const initialState = {
  email: '',
  password: '',
};

function LogIn() {
  const [state, setState] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(`${name}, ${value}`);
    setState((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await apiService.login(state); //make the function return the event, await that
    console.log(result);
    setState(initialState);
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          required
          id="email"
          type="text"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          required
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button>LOG IN</button>
      </form>
    </div>
  );
}

export default LogIn;
