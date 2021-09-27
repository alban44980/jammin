import React from 'react';
import './myjamsitem.css';
import { Link } from 'react-router-dom';
import moment from 'moment';

function MyJamsItem({ eventData }) {
  return (
    <div className="jamsitem-container">
      <div className="date">
        <h2>{moment(eventData.date).format('MMM Do')}</h2>
      </div>
      <div className="item-main">
        <h1>{eventData.title}</h1>
        <h2>{eventData.city}</h2>
      </div>
      <div className="button-container">
        <Link to={`/jams/${eventData._id}`}>
          <button id="see-btn">See Event</button>
        </Link>
      </div>
    </div>
  );
}

export default MyJamsItem;
