import React from 'react'
import './headerfull.css'
import {BackArrow, Text, Input} from '../../atoms'

export const HeaderFull = ({title, des, setObaSearch}) => {
  return (
    <div className='headerfull'>
        <BackArrow />
        <Text type="h1">{title}</Text>
        <Text type="h6">{des}</Text>
        <div className="input-container">
            <Input type="text" name="search" title="Search" setObaSearch={setObaSearch} />
        </div>
    </div>
  )
}