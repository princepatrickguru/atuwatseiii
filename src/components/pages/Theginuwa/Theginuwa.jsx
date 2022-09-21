import React, {useState} from 'react'
import './theginuwa.css'
import { FullLeftImage} from '../../atoms'
import { HeaderFull, ObaListDisplay, ObaList } from '../../molecules'
import basicimg from '../../images/basic.js'
import { DisplayList } from '../../organisms'
import {profileOfOba} from '../../../db/oba.js'

export const Theginuwa = ({setMobileMenu}) => {


  const [listOfOba, setListOfOba] = useState(profileOfOba)
  const [activeOba, setActiveOba] = useState(profileOfOba[0])
  const [obaSearch, setObaSearch] = useState("")

  const changeActivOba = (oba) =>{
        setActiveOba(profileOfOba[oba])
  }


  

  return (
    <div className='pagemain'>
        <FullLeftImage img={basicimg.ginuwa} />
        <div className='pageright'>
            <HeaderFull setObaSearch={setObaSearch} title="The Ginuwa Ruling House" des="Warri Kingdom" setListOfOba={setListOfOba} />
            <DisplayList>   
                <ObaList listOfOba={listOfOba} obaSearch={obaSearch} changeActivOba={changeActivOba}/>
                <ObaListDisplay activeOba={activeOba} />
            </DisplayList>   
        </div>
    </div>
  )
}
