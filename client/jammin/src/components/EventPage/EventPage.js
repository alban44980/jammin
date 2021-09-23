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
        <div className="map-container"></div>
        <div className="social-container"></div>
      </div>
    </div>
  )
}

export default EventPage
