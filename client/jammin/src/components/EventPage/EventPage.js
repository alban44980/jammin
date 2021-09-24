import React, { useState } from 'react';
import './eventpage.css';
import Social from '../Social/Social.jsx';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

function EventPage(props) {
  const data = props.location.state.jam;

  const libraries = ['places'];
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCaWssSgkyqO9SyAJ7VvTonQ1ASzdyQ6oM',
    libraries,
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  const center = data.locCords;

  return (
    <div className="event-container">
      <div className="event-data">
        <h2 className="data-item" id="date">
          {data.date}
        </h2>
        <h1 className="data-item" id="title">
          {data.title}
        </h1>
        <h2 className="data-item" id="location">
          Location : {data.location}
        </h2>
        <p className="data-item" id="description">
          {data.description}
        </p>
      </div>
      <div className="socialmap">
        <div className="map-container">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
        <Social />
      </div>
    </div>
  );
}

export default EventPage;
