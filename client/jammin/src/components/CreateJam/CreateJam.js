import React, {useState} from 'react'
import Search from '../Search/Search';
import apiService from '../../ApiService';
import './createjam.css'


const initialState = {
  title: '',
  date: '',
  description: '',
  city: '',
  cityCords: null,
  location: '',
  locCords: null,
  host: '',
  numOfParticipants : 1,
  languages: '',
  pastEvent: false,
  comingEvent: true
}

function CreateJam() {

  const [state, setState] = useState(initialState);
//use this setState to upade  the location

  function handleChange (e) {
    const {name, value} = e.target;
    console.log(`${name}, ${value}`)
    setState((previous) => ({
      ...previous,
      [name]: value
    }))
  }

  function handleSubmit (e) {
    e.preventDefault();
    console.log('form submitted');
    apiService.postEvent(state);
    setState(initialState)
  }

  function setCity(loc) {
    console.log('setCity function running')
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${loc}&key=AIzaSyCaWssSgkyqO9SyAJ7VvTonQ1ASzdyQ6oM`)
    .then((res) => res.json())
    .then((data)  => {
      console.log(data.results[0].geometry.location);
      let coords = data.results[0].geometry.location;
      setState((previous) => ({
            ...previous,
            city: loc,
            cityCords: coords
          }))
    })
  }


  function setLocation(loc) {
    console.log('setLocation function running')

    //HERE WE WANNA GET THE COORDINATES FOR LOC
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${loc}&key=AIzaSyCaWssSgkyqO9SyAJ7VvTonQ1ASzdyQ6oM`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results[0].geometry.location);
      let coords = data.results[0].geometry.location;
       setState((previous) => ({
      ...previous,
      location: loc,
      locCords: coords
    }))
    })
    .catch((err) => console.log(err));

  }


  return (
    <div className="createJam-main">
      <form className="jam-form" id="jam-form" onSubmit={handleSubmit}>
        <h1>CREATE YOUR JAM 🥳🥳🥳 </h1>
        <input type="text"
        placeholder="Title"
        name="title"
        value={state.title}
        onChange={handleChange}
        className="event-input"
        />
        <input type="date"
        placeholder = "Date"
        name="date"
        value={state.date}
        onChange={handleChange}
        className="event-input"
        />
        <div className="search-city">
          <Search setCity={setCity}/>
        </div>
        <div className="search-city">
          <Search setLocation={setLocation} state={state}/>
        </div>
        <input type="text"
        placeholder="Languages spoken ?"
        name="languages"
        value={state.languages}
        onChange={handleChange}
        className="event-input"
        />
        <textarea
        className="event-input"
        name="description"
        id="event-description"
        placeholder="DESCRIPTION OF YOUR JAM"
        value={state.description}
        onChange={handleChange}
        cols="30"
        rows="10"></textarea>
        <button class="create-btn">CREATE MY EVENT</button>
      </form>
    </div>
  )
}

export default CreateJam
