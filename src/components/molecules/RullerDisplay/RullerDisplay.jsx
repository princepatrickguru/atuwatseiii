import React from 'react'
import './rullerdisplay.css'
// import {logo} from '../../images'
import logos from '../../../img/logo.png'

export const RullerDisplay = () => {
  return (
    <div className='rullerdisplay'>
        <div className="right-down-contianer">
            <div className="right-image">
              <img className="image-3" src={logos} alt="logo 2"  width="100px" height="100px" />
            </div>
        </div>
        <h5 className="right-down-heading">Chief Amanoritsewo Atiwa</h5>
        <p className="right-down-para"><b>Title: </b><span>"The Udefi of Warri"</span></p>
        <p className="right-down-para"><b>Appellation:</b> <span>"Obaloye"</span></p>
    </div>
  )
}
