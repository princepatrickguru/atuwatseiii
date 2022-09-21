import React from 'react'
import './obalist.css'

export const ObaList = ({listOfOba, obaSearch, changeActivOba}) => {
  return (
    <div className='rullerslist'>
        <div className="left-down-section">
            {
                // obaSearch
                listOfOba.filter(obasort=>obasort.name.toLowerCase().includes(obaSearch.toLowerCase())).map((oba, index)=>{
                    return(
                        
                        <div onClick={()=>{changeActivOba(index)}} className="child-container" key={`${oba.id}-${oba.name}`}>
                            <div className="logo-2">
                                <img className="image-2" alt=" site logo" src={oba.image} />
                            </div>
                            <div className="description">
                                
                                <h5 class="text-bold font-1 rulername overflow-heading">{oba.name}</h5>
                                <p class="p-1 font-2">{oba.span} </p>
                                <h5 class="text-bold font-2 p-top-1">Reign</h5>
                                <div class="d-flex col-12 p-top-1">
                                    <p class="font-3 m-r-10"><b>Start:</b> {oba.start}</p>
                                    <p class="font-3"><b>End:</b>{oba.end}</p>
                                </div>
                            </div>
                        </div>  
                      
                    )
                })
            }         
			
        </div>
      
    </div>
  )
}