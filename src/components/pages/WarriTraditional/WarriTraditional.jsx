import React from 'react'
import './warritraditional.css'
import { FullLeftImage} from '../../atoms'
import { FloatingMenu, HeaderFull } from '../../molecules'
import basicimg from '../../images/basic.js'
import { DisplayList } from '../../organisms'
import { RullersList, RullerDisplay } from '../../molecules'


export const WarriTraditional = ({setMobileMenu}) => {
  return (
    <div className='pagemain'>
        <FullLeftImage img={basicimg.crowning} />
        <div className='pageright'>
            <HeaderFull title="The Warri Traditional Council" des="The warri traditional council." />
            <DisplayList>   
                <RullersList />
                <RullerDisplay />
            </DisplayList>   
        </div>
        <FloatingMenu />
    </div>
  )
}
