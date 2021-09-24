import React, { useState, useEffect } from 'react';
import './eventpage.css';
import Social from '../Social/Social.jsx';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import apiService from '../../ApiService';

const initialState = {
  name: '',
  message: '',
};

function EventPage(props) {
  const pathname = window.location.pathname;
  const urlID = pathname.slice(6);
  //initial state => from props || create another object for  initial
  const [data, setData] = useState(props.location?.state?.jam);
  const [msg, setMsg] = useState(initialState); //message state

  //create another state with initial

  useEffect(() => {
    apiService.getEvent(urlID).then((data) => {
      console.log(data);
      setData(data[0]);
    });
  }, [msg]);

  // const data = props.location.state.jam;
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

  const center = data?.locCords;

  //react fragment <> html element that has zero styling

  return (
    <div className="event-container">
      {data && (
        <>
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
            <Social
              jam={data}
              msg={msg}
              setMsg={setMsg}
              initialState={initialState}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default EventPage;
