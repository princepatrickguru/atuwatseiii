import React from 'react'
import './fullleftimage.css'


export const FullLeftImage = ({img}) => {
  return (
    <div className='fullleftimage'>
        <img src={img} alt="img" className='imgfull'/>
        
    </div>
  )
}
