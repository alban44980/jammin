import React, {useState} from 'react';
import Search from '../Search/Search';
import apiService from '../../ApiService';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
// import { formatRelative } from "adt-fns";

const libraries = ["places"];
const mapContainerStyle = {
  width: "50vw",
  height: "50vh"
};

function FindJam() {

  const [searchVal, setSearchVal] = useState({location: null});
  const [jams, setJams] = useState([]);
  const [center, setCenter] = useState(null);
  const [markers, setMarkers] = useState([]);

  function searchJams (input) {
    console.log('searchJams function running')
    setSearchVal(input)
  }

  function getCoords(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
      result.push(input[i].locCords);
    }
    console.log(result);
    return result
  }

  async function handleSubmit (e) {
    e.preventDefault();
    const result = await apiService.getJams({city: searchVal});
    setJams(result);
    console.log(result);
    let eventsCoords = getCoords(result);
    setMarkers(eventsCoords);
    //get coordinates of every element of the array results
    // setMarkers()
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchVal}&key=AIzaSyCaWssSgkyqO9SyAJ7VvTonQ1ASzdyQ6oM`)
    .then((res) => res.json())
    .then((data => {
      let coords = data.results[0].geometry.location;
      setCenter(coords)
    }))
  }

  const{ isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: 'AIzaSyCaWssSgkyqO9SyAJ7VvTonQ1ASzdyQ6oM',
    libraries
  })

  if(loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";


  return (
    <div className="findJam-main">
      <form className="find-form" onSubmit={handleSubmit}>
      <h1 id="find-jam">👇👇 Enter your location to find a jam in your city 👇👇</h1>
      <Search searchJams={searchJams}/>
      <button className="find-btn">Search</button>
      <div className="jams-list-container">
        <div className="jams-list">
          {jams.length? jams.map(jam =>
          <div>
            <h1>{jam.title}</h1>
            <h1>{jam.date}</h1>
            <h2>Participants: {jam.numOfParticipants}</h2>
          </div>
            ): null}
        </div>
        <div className="maps-container">
          {jams.length ?
          <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={13}
          center={center}
          >
            {/* <Marker
            position={{lat: 41.3950183, lng: 2.1977535}}
            /> */}
            {markers.map(marker => (
            <Marker
            position={{ lat: marker.lat, lng: marker.lng}}
            />
            ))}
          </GoogleMap> :
          <h1>OOPS it seems there is no jams coming up in this city 😅</h1>
        }

        </div>

      </div>
      <div>

      </div>
      </form>
    </div>
  )
}


export default FindJam
