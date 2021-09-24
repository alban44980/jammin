import React, { useState, useEffect } from 'react';
import './social.css';
import apiService from '../../ApiService';

// const initialState = {
//   name: '',
//   message: '',
// };

function Social({ jam, msg, setMsg, initialState }) {
  // const [msg, setMsg] = useState(initialState); //message state
  // const [msgList, setMsgList] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setMsg((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await apiService.postMessage(msg, jam._id);
    setMsg(initialState);
  }

  return (
    <div className="social-container">
      <div className="msg-container">
        {jam.messages.map((msg) => (
          <div className="msg-indiv">
            <p className="msg-name">{msg.name}</p>
            <p className="msg-message">{msg.message}</p>
          </div>
        ))}
      </div>
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
