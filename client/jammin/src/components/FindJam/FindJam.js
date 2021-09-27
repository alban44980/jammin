import React, { useState, useEffect } from 'react';
import Search from '../Search/Search';
import JamItem from '../JamItem/JamItem';
import apiService from '../../ApiService';
import logo from '../../images/marker.png';
import './findjam.css';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { Link } from 'react-router-dom';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '60vh',
  borderRadius: '10px',
};

function FindJam(props) {
  const jams = props.jams;
  const setJams = props.setJams;
  // const [searchVal, setSearchVal] = useState({ location: null });
  const searchVal = props.searchVal;
  const setSearchVal = props.setSearchVal;
  // const [center, setCenter] = useState(null);
  const center = props.center;
  const setCenter = props.setCenter;
  // const [markers, setMarkers] = useState([]);
  const markers = props.markers;
  const setMarkers = props.setMarkers;

  const hasSearch = props.hasSearch;
  const setHasSearch = props.setHasSearch;

  const userData = props.userData;
  const setUserData = props.setUserData;
  const isSignedUp = props.isSignedUp;
  const setIsSignedUp = props.setIsSignedUp;

  const [selected, setSelected] = useState(null);
  const [idRoute, setIdRoute] = useState(null);
  const [highEvent, setHighEvent] = useState(null);

  // const [error, setError] = useState(null);
  const findPlaceholder = 'Enter your city';

  function searchJams(input) {
    setSearchVal(input);
  }

  function getCoords(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
      result.push(input[i].locCords);
    }
    return result;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await apiService.getJams({ city: searchVal });
    setHasSearch(true);
    // if (!result.length) {
    //   setError(true);
    // } else {
    //   setError(false);
    // }

    setJams(result);
    let eventsCoords = getCoords(result);
    setMarkers(eventsCoords);
    //get coordinates of every element of the array results
    // setMarkers()
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${searchVal}&key=AIzaSyCaWssSgkyqO9SyAJ7VvTonQ1ASzdyQ6oM`
    )
      .then((res) => res.json())
      .then((data) => {
        let coords = data.results[0].geometry.location;
        setCenter(coords);
      });
  }

  function coordsToId(coords) {
    for (let i = 0; i < jams.length; i++) {
      if (
        jams[i].locCords.lat === coords.lat &&
        jams[i].locCords.lng === coords.lng
      ) {
        return jams[i]._id;
      }
    }
  }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCaWssSgkyqO9SyAJ7VvTonQ1ASzdyQ6oM',
    libraries,
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div className="findJam-main">
      <form className="find-form" onSubmit={handleSubmit}>
        <Search searchJams={searchJams} findPlaceholder={findPlaceholder} />
        <button className="find-btn">Search</button>
      </form>
      <div className="jams-list-container">
        <div className="jams-list">
          {jams.length
            ? jams.map((jam) => (
                <JamItem
                  jam={jam}
                  highEvent={highEvent}
                  setHighEvent={setHighEvent}
                  isSignedUp={isSignedUp}
                />
              ))
            : null}
        </div>
        <div className="maps-container">
          <div className="maps">
            {jams.length ? (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={11}
                center={center}
              >
                {markers.map((marker) => (
                  <Marker
                    onClick={() => {
                      setSelected(marker);
                      const routeId = coordsToId({
                        lat: marker.lat,
                        lng: marker.lng,
                      });
                      setIdRoute(routeId);
                    }}
                    position={{ lat: marker.lat, lng: marker.lng + 0.0034 }}
                    icon={{
                      url: logo,
                      scaledSize:
                        marker.lat === highEvent?.lat &&
                        marker.lng === highEvent?.lng
                          ? new window.google.maps.Size(50, 50)
                          : new window.google.maps.Size(40, 40),
                    }}
                  />
                ))}

                {selected ? (
                  <InfoWindow
                    position={{
                      lat: selected.lat,
                      lng: selected.lng,
                    }}
                    onCloseClick={() => {
                      setSelected(null);
                    }}
                  >
                    <Link to={`/jams/${idRoute}`}>
                      <button className="btn-see-event">SEE EVENT</button>
                      <div className="map-window"></div>
                    </Link>
                  </InfoWindow>
                ) : null}
              </GoogleMap>
            ) : null}
          </div>
        </div>
      </div>
      <div className="error-container">
        {jams.length === 0 && hasSearch ? (
          <div className="msg-fail">
            <h1 id="search-fail">
              OOPS it seems there is no jams coming up in this city 😅
            </h1>
            <Link to="/createjam">
              <button id="btn-fail">Create a jam</button>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default FindJam;

//style

//options for hover
