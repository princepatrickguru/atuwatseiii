import React from 'react'
import './obalistdisplay.css'

export const ObaListDisplay = ({activeOba}) => {
    console.log(activeOba)
  return (
       <div className='obadisplay'>
        <div className="right-down-contianer">
            <div className="right-image">
            </div>
        </div>
        <h5 className="text-bold font-2 p-top-1">Reign</h5>
        <div className="d-flex col-12 p-top-1">
              <img className="image-3" src={activeOba.image} alt={activeOba.name}  width="100px" height="100px" />
          <p className="font-3 m-r-10"><b>Start:</b> {activeOba.start}</p>
          <p className="font-3"><b>End:</b>{activeOba.end}</p>
        </div>
    </div>
  )
}
