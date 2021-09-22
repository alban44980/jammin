import React from 'react';
import Search from './Search'



function FindJam() {

  return (
    <div className="findJam-main">
      <form className="find-form" action="">
      <h1 id="find-jam">👇👇 Enter your location to find a jam in your city 👇👇</h1>
      <Search />
      <button className="find-btn">Search</button>
      </form>
    </div>
  )
}


export default FindJam
