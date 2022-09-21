import React from 'react'
import './input.css'

export const Input = ({type, name, title, className, setObaSearch}) => {
  const inputClass = `input ${className}`
  return (
    <div>
      <input className={inputClass} type={type} name={name}  placeholder={title} onChange={(e)=>{setObaSearch(e.target.value)}} />
    </div>
  )
}
