import React from 'react'
import './navmenu.css'
import logo from '../../../img/logo.png'
import { MobileMenu } from '../../atoms'
import { Link } from 'react-router-dom'

export const NavMenu = ({setMobileMenu}) => {
  return (
    <div className='navmenu'>
        <div className="leftNav">
            <div className="logobox">
                <img src={logo} alt="logo" className='logo'/>
            </div>
           <MobileMenu setMobileMenu={setMobileMenu} color="white" />
        </div>
        <div className="rightNav">
            <ul className="navmenuall">
                <Link to="/History" className="navlist">History</Link>
                <Link to="/Theginuwa" className="navlist">The Ginuwa Ruling House</Link>
                <Link to="/WarriTraditional" className="navlist">Warri Traditional Council</Link>
                <Link to="/Royalcourtnotices" className="navlist">Royal Court Notices</Link>
            </ul>
        </div>
    </div>
  )
}
