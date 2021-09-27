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
import moment from 'moment';

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
  const userData = props.userData;
  const setUserData = props.setUserData;
  const isSignedUp = props.isSignedUp;
  const setIsSignedUp = props.isSignedUp;

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

  async function addToEvents(userid, jamid) {
    const body = {
      id: userid,
      jamId: jamid,
    };
    await apiService.addjam(body);
    //send back from post request
    setUserData((previous) => ({
      ...previous,
      comingEvents: [...previous.comingEvents, data],
    }));
  }

  //FUNCTION TO CHECK IF THE EVENT IS ALREADY IN THE USER DATA
  function isEventAdded(jamid) {
    console.log('isEventAdded function');
    console.log(userData);
    //loop through comingEvents
    const arr = userData.comingEvents;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]._id === jamid) {
        return true;
      }
    }
    return false;
  }
  isEventAdded('61509d3b0e30797abce2bfb4');
  //react fragment <> html element that has zero styling

  return (
    <div className="event-container">
      {data && (
        <>
          <div className="event-data">
            <div className="data-item" id="date">
              <h2>{moment(data.date).format('MMM Do, h:mm a')}</h2>
              {isSignedUp ? (
                isEventAdded(data._id) ? (
                  <button>EVENT ADDED</button>
                ) : (
                  <button onClick={() => addToEvents(userData._id, data._id)}>
                    PARTICIPATE
                  </button>
                )
              ) : null}
            </div>
            <h1 className="data-item" id="title" s>
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
