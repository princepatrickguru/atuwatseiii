import React from 'react'

export const Paragraph = ({type, children}) => {
  return (
    <>
        <p className={type}>
          {children}
        </p>
    </>
  )
}

