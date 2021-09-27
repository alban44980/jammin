import React from 'react';
import MyJamsItem from '../MyJamsItem/MyJamsItem';
import './dashboard.css';

function Dashboard({ userData }) {
  return (
    <div className="dashboard-container">
      <h1>Hi {userData.firstname}</h1>
      <h2>Check out your upcoming events below: </h2>
      <div className="myevents-list">
        {userData.comingEvents.length
          ? userData.comingEvents.map((event) => (
              <MyJamsItem eventData={event} />
            ))
          : null}
      </div>
    </div>
  );
}

export default Dashboard;
