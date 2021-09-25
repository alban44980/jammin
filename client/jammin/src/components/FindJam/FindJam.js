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
import { Link } from 'react-router-dom';

// import { formatRelative } from "adt-fns";

const libraries = ['places'];
const mapContainerStyle = {
  width: '90%',
  height: '50vh',
  borderRadius: '10px',
};

function FindJam(props) {
  console.log('FindJam props : ', props);
  const jams = props.jams;
  const setJams = props.setJams;
  const [searchVal, setSearchVal] = useState({ location: null });
  const [center, setCenter] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [idRoute, setIdRoute] = useState(null);

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

  function coordsToId(coords) {
    console.log(jams);

    console.log(coords);
    for (let i = 0; i < jams.length; i++) {
      // console.log(jams[i].locCords.lat);
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
                    <Marker
                      onClick={() => {
                        setSelected(marker);
                        // setSelectedCoords({
                        //   lat: marker.lat,
                        //   lng: marker.lng,
                        // });
                        const routeId = coordsToId({
                          lat: marker.lat,
                          lng: marker.lng,
                        });
                        setIdRoute(routeId);
                        //GIVEN THOSE COORDS SET THE STATE FOR THE ID
                      }}
                      position={{ lat: marker.lat, lng: marker.lng }}
                      size="200px"
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

//style

//options for hover
