import React, {useState} from 'react'

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


  function handleChange () {

  }

  return (
    <div className="createJam-main">
      <form className="jam-form">
        <h1>CREATE YOUR JAM 🥳🥳🥳 </h1>
        <input type="datetime-local"
        placeholder = "Date"
        name = "date"
        value={state.date}
        onChange={handleChange}
        className="event-input"
        />
        <input type="text"
        placeholder = "Location"
        name = "location"
        value={state.location}
        onChange={handleChange}
        className="event-input"
        />
        <input type="text"
        placeholder = "Description"
        name = "description"
        value={state.description}
        onChange={handleChange}
        className="event-input"
        />

      </form>
    </div>
  )
}

export default CreateJam
