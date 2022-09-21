import React from 'react'
import { Luncher } from '../../molecules'
import './home.css'
import {Text} from '../../atoms'
import { NavMenu } from '../../molecules/'

export const Home = ({setMobileMenu}) => {
  return (
    <div className='home'>
      <Luncher />
      <NavMenu setMobileMenu={setMobileMenu} />
      <div className='home-title'>
        <div className="title-content">
            <Text type="h1" className="text-white">Ògíamẹ̀ Atúwàtse III - The Olú of Warri</Text>
        </div>
      </div>
    </div>
  )
}
