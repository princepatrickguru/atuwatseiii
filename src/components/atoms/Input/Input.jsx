import React from 'react'
import './input.css'

export const Input = ({type, name, title, setObaSearch}) => {
  return (
    <div>
      <input className="input" type={type} name={name}  placeholder={title} onChange={(e)=>{setObaSearch(e.target.value)}} />
    </div>
  )
}
