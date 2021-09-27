import React, { useEffect } from 'react';
import MyJamsItem from '../MyJamsItem/MyJamsItem';
import './dashboard.css';

function Dashboard({ userData }) {
  useEffect(() => {
    //sort events
    userData.comingEvents.sort(function (a, b) {
      return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
    });
    console.log('useEffect working');
  }, []);

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
