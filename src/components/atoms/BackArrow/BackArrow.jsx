import React from 'react'
import './backarrow.css'
import { Link } from 'react-router-dom'

export const BackArrow = () => {
  return (
    <Link to="/" className='backarrow'>⟵</Link>
  )
}
