import React, {useState} from 'react';
import Search from '../Search/Search';
import apiService from '../../ApiService';
import './findjam.css';
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
  const [errorFail, setErrorFail] = useState("");

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
          <div className="single-jam">
            <div className="jam-info">
              <h1>{jam.date}</h1>
              <h1>{jam.title}</h1>
              <div className="jam-loc">
                <img src="" alt=""/>
                <p>{jam.location}</p>
              </div>
            </div>
            <div className="see-event">
              <button>SEE EVENT</button>
            </div>
          </div>
            ): null}
        </div>
        <div className="maps-container">
          <div className="maps">
          {jams.length ?
                    <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={13}
                    center={center}
                    >
                      {markers.map(marker => (
                      <Marker
                      position={{ lat: marker.lat, lng: marker.lng}}
                      />
                      ))}
                    </GoogleMap> :
                    <h1 id="search-fail">OOPS it seems there is no jams coming up in this city 😅</h1>
                  }
          </div>


        </div>

      </div>
      <div>

      </div>
      </form>
    </div>
  )
}


export default FindJam
