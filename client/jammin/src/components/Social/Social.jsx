import React, { useEffect, useRef } from 'react';
import './social.css';
import apiService from '../../ApiService';

// const initialState = {
//   name: '',
//   message: '',
// };

function Social({ jam, msg, setMsg, initialState, isSignedUp, userData }) {
  // const [msg, setMsg] = useState(initialState); //message state
  // const [msgList, setMsgList] = useState(null);

  const messagesEndRef = useRef(null);
  const dummyDiv = useRef();

  const scrollToBottom = () => {
    console.log('SCROLL TO BOTTOM RUNNING');
    dummyDiv.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [msg]);

  useEffect(() => {
    if (messagesEndRef) {
      messagesEndRef.current.addEventListener('DOMNodeInserted', (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
    scrollToBottom();
  }, []);

  function handleChange(e) {
    const text = e.target.value;
    setMsg((previous) => ({
      name: userData.firstname,
      message: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await apiService.postMessage(msg, jam._id);
    setMsg(initialState);
  }

  return (
    <div className="social-container">
      <div className="msg-container" ref={messagesEndRef}>
        {jam.messages.map((msg) => (
          <div className="msg-indiv">
            <p className="msg-name">{msg.name}</p>
            <p className="msg-message">{msg.message}</p>
          </div>
        ))}
        <div ref={dummyDiv}></div>
      </div>
      <div className="form-container">
        {isSignedUp ? (
          <form className="social-form" onSubmit={handleSubmit}>
            <div className="left-form">
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
        ) : (
          <div className="social-err">
            <h2>Log in to use the chat !</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Social;
