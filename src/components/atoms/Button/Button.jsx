import React from 'react'

export const Button = ({className, controlClick, children}) => {
  return (
      <>
        <button className={className}
          onClick={()=> controlClick()}>
          {children}
        </button>
      </>
  )
}