import React, { useState } from 'react';
import './social.css';

const initialState = {
  name: '',
  message: '',
};

function Social() {
  const [msg, setMsg] = useState(initialState); //message state

  function handleChange(e) {
    const { name, value } = e.target;
    setMsg((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('form submitted');
    console.log(msg);
    //postmessage;
    setMsg(initialState);
  }

  return (
    <div className="social-container">
      <div className="msg-container"></div>
      <div className="form-container">
        <form className="social-form" onSubmit={handleSubmit}>
          <div className="left-form">
            <input
              required
              type="text"
              placeholder="NAME"
              name="name"
              value={msg.name}
              onChange={handleChange}
              className="social-input"
              id="name-input"
            />
            <textarea
              required
              type="text"
              placeholder="MESSAGE"
              name="message"
              value={msg.message}
              onChange={handleChange}
              className="social-input"
              id="message-input"
            ></textarea>
          </div>
          <div className="right-form">
            <button id="post-msg">POST</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Social;
