import React, { useState } from 'react';
import Search from '../Search/Search';
import JamItem from '../JamItem/JamItem';
import apiService from '../../ApiService';
import './findjam.css';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
// import { formatRelative } from "adt-fns";

const libraries = ['places'];
const mapContainerStyle = {
  width: '90%',
  height: '50vh',
  borderRadius: '10px',
};

function FindJam() {
  const [searchVal, setSearchVal] = useState({ location: null });
  const [jams, setJams] = useState([]);
  const [center, setCenter] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [error, setError] = useState('');
  const findPlaceholder = 'Enter your city';

  function searchJams(input) {
    console.log('searchJams function running');
    setSearchVal(input);
  }

  function getCoords(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
      result.push(input[i].locCords);
    }
    console.log(result);
    return result;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await apiService.getJams({ city: searchVal });
    if (!result.length) {
      setError('OOPS it seems there is no jams coming up in this city 😅');
    } else {
      setError('');
    }
    setJams(result);
    console.log(result);
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

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCaWssSgkyqO9SyAJ7VvTonQ1ASzdyQ6oM',
    libraries,
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div className="findJam-main">
      <form className="find-form" onSubmit={handleSubmit}>
        {/* <h1 id="find-jam">👇👇 Enter your location to find a jam in your city 👇👇</h1> */}
        <Search searchJams={searchJams} findPlaceholder={findPlaceholder} />
        <button className="find-btn">Search</button>
        <div className="jams-list-container">
          <div className="jams-list">
            {jams.length ? jams.map((jam) => <JamItem jam={jam} />) : null}
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
                    <Marker position={{ lat: marker.lat, lng: marker.lng }} />
                  ))}
                </GoogleMap>
              ) : (
                <h1 id="search-fail">{error}</h1>
              )}
            </div>
          </div>
        </div>
        <div></div>
      </form>
    </div>
  );
}

export default FindJam;
