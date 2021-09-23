import React, {useState} from 'react';
import Search from './Search';
import ApiService from '../ApiService';





function FindJam() {

  const [searchVal, setSearchVal] = useState('')

  function searchJams (input) {
    console.log('searchJams function running')
    setSearchVal(input)
  }

  function handleSubmit (e) {
    e.preventDefault();
    console.log('search submitted');
    console.log(searchVal);
    //API GET CALL HERE
    //Reset the searchVal state
    setSearchVal('')
  }


  return (
    <div className="findJam-main">
      <form className="find-form" onSubmit={handleSubmit}>
      <h1 id="find-jam">👇👇 Enter your location to find a jam in your city 👇👇</h1>
      <Search searchJams={searchJams}/>
      <button className="find-btn">Search</button>
      </form>
    </div>
  )
}


export default FindJam
