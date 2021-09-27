import React from 'react';
import './dashboard.css';

function Dashboard({ userData }) {
  return (
    <div>
      <h1>Hi {userData.firstname}</h1>
      <h2>Check out your upcoming events below: </h2>
      <div className="myevents-list">
        {userData.comingEvents.length
          ? userData.comingEvents.map((event) => <h1>{event.title}</h1>)
          : null}
      </div>
    </div>
  );
}

export default Dashboard;
