import React, { useState } from 'react';
import apiService from '../../ApiService';
import './signup.css';
import { useHistory } from 'react-router-dom';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  pastEvents: [],
  comingEvents: [],
};

function SignUp() {
  const [state, setState] = useState(initialState);

  const history = useHistory();

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
    const user = await apiService.register(state); //make the function return the event, await that
    console.log('event data back from API ', user);
    setState(initialState);
    history.push('/dashboard');
  }

  return (
    <div className="signup-container">
      <h1>Create your account</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          required
          id="firstname"
          type="text"
          placeholder="First name"
          name="firstname"
          value={state.firstname}
          onChange={handleChange}
        />
        <input
          required
          id="lastname"
          type="text"
          placeholder="Last name"
          name="lastname"
          value={state.lastname}
          onChange={handleChange}
        />
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
        <button>JOIN NOW</button>
      </form>
    </div>
  );
}

export default SignUp;

//firstname LastName Email Password RepeatPassword
