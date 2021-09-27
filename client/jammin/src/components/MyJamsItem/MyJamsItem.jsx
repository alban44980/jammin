import React from 'react';
import './myjamsitem.css';

function MyJamsItem({ eventData }) {
  return (
    <div className="jamsitem-container">
      <div className="date">
        <h2>{eventData.date}</h2>
      </div>
      <div className="item-main">
        <h1>{eventData.title}</h1>
        <h2>{eventData.city}</h2>
      </div>
      <div className="button-container">
        <button>See Event</button>
      </div>
    </div>
  );
}

export default MyJamsItem;
