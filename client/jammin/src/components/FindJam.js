import React, {useState} from 'react';
import Search from './Search';
import apiService from '../ApiService';


function FindJam() {

  const [searchVal, setSearchVal] = useState({location: null});
  const [jams, setJams] = useState([]);

  function searchJams (input) {
    console.log('searchJams function running')
    setSearchVal(input)
  }

  async function handleSubmit (e) {
    e.preventDefault();
    const result = await apiService.getJams({city: searchVal});
    setJams(result)
  }


  return (
    <div className="findJam-main">
      <form className="find-form" onSubmit={handleSubmit}>
      <h1 id="find-jam">👇👇 Enter your location to find a jam in your city 👇👇</h1>
      <Search searchJams={searchJams}/>
      <button className="find-btn">Search</button>
      <div>
        {jams.length? jams.map(jam =>
        <div>
          <h1>{jam.title}</h1>
          <h1>{jam.date}</h1>
          <h2>Participants: {jam.numOfParticipants}</h2>
        </div>
          ): null}
      </div>
      </form>
    </div>
  )
}


export default FindJam
