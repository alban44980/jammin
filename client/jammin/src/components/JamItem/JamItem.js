import React from 'react'
import './JamItem.css'

function JamItem({jam}) {
  return (
    <div>
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
    </div>
  )
}

export default JamItem
