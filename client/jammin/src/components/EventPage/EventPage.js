import React from 'react'
import './eventpage.css'

function EventPage(props) {

  const data = props.location.state.jam;
  console.log(data);

  return (
    <div className="event-container">
      <div className="event-data">
        <h2 className="data-item" id="date">{data.date}</h2>
        <h1 className="data-item" id="title">{data.title}</h1>
        <h2 className="data-item" id="location">Location : {data.location}</h2>
        <p className="data-item" id="description">More about the event :{data.description}</p>
      </div>
      <div className="socialmap">
        <div className="map-container">
          <h1>MAP</h1>
        </div>
        <div className="social-container">
          <h1>SOCIAL</h1>
        </div>
      </div>
    </div>
  )
}

export default EventPage
