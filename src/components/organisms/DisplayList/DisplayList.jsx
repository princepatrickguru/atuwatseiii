import React from 'react'
import './displaylist.css'

export const DisplayList = ({children}) => {
  return (
    <div className='displaylist'>
        {children}
    </div>
  )
}
