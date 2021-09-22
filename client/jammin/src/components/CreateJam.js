import React, {useState} from 'react'
import Search from './Search';
import apiService from './../ApiService';


const initialState = {
  date: '',
  description: '',
  location: '',
  coordinates: [],
  host: '',
  numofParticipants : 0,
  languages: [],
  pastEvent: undefined,
  comingEvent: undefined
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

  function setLocation(loc) {
    setState((previous) => ({
      ...previous,
      location: loc
    }))
  }


  return (
    <div className="createJam-main">
      <form className="jam-form" id="jam-form" onSubmit={handleSubmit}>
        <h1>CREATE YOUR JAM 🥳🥳🥳 </h1>
        <input type="date"
        placeholder = "Date"
        name = "date"
        value={state.date}
        onChange={handleChange}
        className="event-input"
        />
        {/* <input type="text"
        placeholder = "Location"
        name = "location"
        value={state.location}
        onChange={handleChange}
        className="event-input"
        /> */}
        <Search setLocation={setLocation}/>

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
