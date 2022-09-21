import React from 'react'
import './mobilenav.css'
import { Text } from '../../atoms'
import logo from '../../../img/logo.png'
import { Link } from 'react-router-dom'

export const MobileNav = ({setMobileMenu}) => {
  return (
    <div className='mobilenav'>
        <div className="mobilenavtop">
            <div className="mobileclosebtn" onClick={()=>{setMobileMenu(false)}} ></div>
        </div>
        <div className='mobilenavrow'>
            <Link to="/" className="mobilemenuimg">
                 <img src={logo} alt="logo" className='logo-mobile' />
            </Link>
            <Link to="/" className="mobilenavrowflexcolumn">
                <Text type="h5" className="mobilemenutextbig text-black">Ògíamẹ̀ Atúwàtse III - The Olú of Warri</Text>
                <Text type="h6" className="mobilemenutextsmall text-black">Àghọ̀fẹn, Warri - Nigeria</Text>
            </Link>
        </div>
        <Link to="/History" className='mobilenavrow'>
            <div className="mobilemenuicon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4d1200"><g data-name="Group 11527" fill="#4d1200"><path data-name="Path 1466" d="M3.8 20.276v-8.325a.4.4 0 0 0-.8 0v8.156h-.916v-9.468h.883a1.255 1.255 0 0 0 .828-2.2v-1.2a1.258 1.258 0 0 0-.856-1.19V5.013a1.256 1.256 0 1 0-.8 0v1.042a1.258 1.258 0 0 0-.856 1.19v1.2a1.253 1.253 0 0 0 0 1.886v9.949A2.114 2.114 0 0 0 0 22.218a.4.4 0 0 0 .4.4h4.278a.4.4 0 0 0 .4-.4A2.114 2.114 0 0 0 3.8 20.276ZM2.967 9.839h-.856a.456.456 0 1 1 0-.911h.856a.456.456 0 0 1 0 .911Zm-.428-6.472a.455.455 0 1 1-.455.455.456.456 0 0 1 .455-.454Zm-.455 3.878a.456.456 0 0 1 .911 0v.884h-.911ZM.863 21.817a1.313 1.313 0 0 1 1.248-.911h.856a1.313 1.313 0 0 1 1.248.911Z"></path><path data-name="Path 1467" d="M26.04 20.276v-9.949a1.253 1.253 0 0 0 0-1.886v-1.2a1.258 1.258 0 0 0-.856-1.19V5.013a1.256 1.256 0 1 0-.8 0v1.042a1.258 1.258 0 0 0-.856 1.19v1.2a1.253 1.253 0 0 0 0 1.886v9.949a2.115 2.115 0 0 0-1.283 1.942.4.4 0 0 0 .4.4h4.278a.4.4 0 0 0 .4-.4 2.114 2.114 0 0 0-1.283-1.946ZM23.905 9.383a.456.456 0 0 1 .455-.455h.856a.456.456 0 0 1 0 .911h-.856a.456.456 0 0 1-.455-.456Zm.883-6.017a.455.455 0 1 1-.455.455.456.456 0 0 1 .451-.453Zm-.455 3.878a.456.456 0 1 1 .911 0v.884h-.911Zm0 3.394h.911v9.468h-.911Zm-1.228 11.179a1.313 1.313 0 0 1 1.248-.911h.856a1.313 1.313 0 0 1 1.248.911Z"></path><path data-name="Path 1468" d="M18.757 11.006a.4.4 0 1 0-.78.18l2.454 10.632H6.892l2.454-10.632a.4.4 0 1 0-.78-.18L5.999 22.128a.4.4 0 0 0 .39.49h14.545a.4.4 0 0 0 .39-.49Z"></path><path data-name="Path 1469" d="m8.033 8.744 2.631 1.911-1 3.093a.891.891 0 0 0 1.372 1l2.631-1.912 2.631 1.912a.878.878 0 0 0 1.048 0 .878.878 0 0 0 .324-1l-1-3.093 2.631-1.912a.891.891 0 0 0-.524-1.613h-1.683a.4.4 0 0 0 0 .8h1.683a.091.091 0 0 1 .054.165l-2.866 2.082a.4.4 0 0 0-.145.448l1.095 3.369a.091.091 0 0 1-.14.1l-2.866-2.082a.4.4 0 0 0-.47 0l-2.866 2.082a.091.091 0 0 1-.14-.1l1.095-3.369a.4.4 0 0 0-.145-.448L8.517 8.095a.091.091 0 0 1 .053-.165h3.543a.4.4 0 0 0 .381-.277l1.095-3.369a.091.091 0 0 1 .173 0l1.095 3.369a.4.4 0 1 0 .761-.247l-1.095-3.369a.891.891 0 0 0-1.7 0l-1 3.093H8.559a.892.892 0 0 0-.524 1.613Z"></path><path data-name="Path 1470" d="M11.667 3.25a.4.4 0 1 0 .566-.566l-.856-.856a.4.4 0 0 0-.566.566Z"></path><path data-name="Path 1471" d="M15.372 3.367a.4.4 0 0 0 .283-.117l.856-.856a.4.4 0 1 0-.566-.566l-.856.856a.4.4 0 0 0 .283.683Z"></path><path data-name="Path 1472" d="M13.661 2.511a.4.4 0 0 0 .4-.4V.4a.4.4 0 1 0-.8 0v1.711a.4.4 0 0 0 .4.4Z"></path></g></svg>
            </div>
            <div className="mobilemenutextbox"><Text className="mobilemenutext">History</Text></div>
        </Link>
        <Link to="/Theginuwa" className='mobilenavrow'>
            <div className="mobilemenuicon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4d1200"><g data-name="Group 11527" fill="#4d1200"><path data-name="Path 1466" d="M3.8 20.276v-8.325a.4.4 0 0 0-.8 0v8.156h-.916v-9.468h.883a1.255 1.255 0 0 0 .828-2.2v-1.2a1.258 1.258 0 0 0-.856-1.19V5.013a1.256 1.256 0 1 0-.8 0v1.042a1.258 1.258 0 0 0-.856 1.19v1.2a1.253 1.253 0 0 0 0 1.886v9.949A2.114 2.114 0 0 0 0 22.218a.4.4 0 0 0 .4.4h4.278a.4.4 0 0 0 .4-.4A2.114 2.114 0 0 0 3.8 20.276ZM2.967 9.839h-.856a.456.456 0 1 1 0-.911h.856a.456.456 0 0 1 0 .911Zm-.428-6.472a.455.455 0 1 1-.455.455.456.456 0 0 1 .455-.454Zm-.455 3.878a.456.456 0 0 1 .911 0v.884h-.911ZM.863 21.817a1.313 1.313 0 0 1 1.248-.911h.856a1.313 1.313 0 0 1 1.248.911Z"></path><path data-name="Path 1467" d="M26.04 20.276v-9.949a1.253 1.253 0 0 0 0-1.886v-1.2a1.258 1.258 0 0 0-.856-1.19V5.013a1.256 1.256 0 1 0-.8 0v1.042a1.258 1.258 0 0 0-.856 1.19v1.2a1.253 1.253 0 0 0 0 1.886v9.949a2.115 2.115 0 0 0-1.283 1.942.4.4 0 0 0 .4.4h4.278a.4.4 0 0 0 .4-.4 2.114 2.114 0 0 0-1.283-1.946ZM23.905 9.383a.456.456 0 0 1 .455-.455h.856a.456.456 0 0 1 0 .911h-.856a.456.456 0 0 1-.455-.456Zm.883-6.017a.455.455 0 1 1-.455.455.456.456 0 0 1 .451-.453Zm-.455 3.878a.456.456 0 1 1 .911 0v.884h-.911Zm0 3.394h.911v9.468h-.911Zm-1.228 11.179a1.313 1.313 0 0 1 1.248-.911h.856a1.313 1.313 0 0 1 1.248.911Z"></path><path data-name="Path 1468" d="M18.757 11.006a.4.4 0 1 0-.78.18l2.454 10.632H6.892l2.454-10.632a.4.4 0 1 0-.78-.18L5.999 22.128a.4.4 0 0 0 .39.49h14.545a.4.4 0 0 0 .39-.49Z"></path><path data-name="Path 1469" d="m8.033 8.744 2.631 1.911-1 3.093a.891.891 0 0 0 1.372 1l2.631-1.912 2.631 1.912a.878.878 0 0 0 1.048 0 .878.878 0 0 0 .324-1l-1-3.093 2.631-1.912a.891.891 0 0 0-.524-1.613h-1.683a.4.4 0 0 0 0 .8h1.683a.091.091 0 0 1 .054.165l-2.866 2.082a.4.4 0 0 0-.145.448l1.095 3.369a.091.091 0 0 1-.14.1l-2.866-2.082a.4.4 0 0 0-.47 0l-2.866 2.082a.091.091 0 0 1-.14-.1l1.095-3.369a.4.4 0 0 0-.145-.448L8.517 8.095a.091.091 0 0 1 .053-.165h3.543a.4.4 0 0 0 .381-.277l1.095-3.369a.091.091 0 0 1 .173 0l1.095 3.369a.4.4 0 1 0 .761-.247l-1.095-3.369a.891.891 0 0 0-1.7 0l-1 3.093H8.559a.892.892 0 0 0-.524 1.613Z"></path><path data-name="Path 1470" d="M11.667 3.25a.4.4 0 1 0 .566-.566l-.856-.856a.4.4 0 0 0-.566.566Z"></path><path data-name="Path 1471" d="M15.372 3.367a.4.4 0 0 0 .283-.117l.856-.856a.4.4 0 1 0-.566-.566l-.856.856a.4.4 0 0 0 .283.683Z"></path><path data-name="Path 1472" d="M13.661 2.511a.4.4 0 0 0 .4-.4V.4a.4.4 0 1 0-.8 0v1.711a.4.4 0 0 0 .4.4Z"></path></g></svg>
            </div>
            <div className="mobilemenutextbox"><Text className="mobilemenutext">The Ginuwa Ruling House</Text></div>
        </Link>
        <Link to="/Warritraditional" className='mobilenavrow'>
            <div className="mobilemenuicon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4d1200"><g data-name="Group 11527" fill="#4d1200"><path data-name="Path 1466" d="M3.8 20.276v-8.325a.4.4 0 0 0-.8 0v8.156h-.916v-9.468h.883a1.255 1.255 0 0 0 .828-2.2v-1.2a1.258 1.258 0 0 0-.856-1.19V5.013a1.256 1.256 0 1 0-.8 0v1.042a1.258 1.258 0 0 0-.856 1.19v1.2a1.253 1.253 0 0 0 0 1.886v9.949A2.114 2.114 0 0 0 0 22.218a.4.4 0 0 0 .4.4h4.278a.4.4 0 0 0 .4-.4A2.114 2.114 0 0 0 3.8 20.276ZM2.967 9.839h-.856a.456.456 0 1 1 0-.911h.856a.456.456 0 0 1 0 .911Zm-.428-6.472a.455.455 0 1 1-.455.455.456.456 0 0 1 .455-.454Zm-.455 3.878a.456.456 0 0 1 .911 0v.884h-.911ZM.863 21.817a1.313 1.313 0 0 1 1.248-.911h.856a1.313 1.313 0 0 1 1.248.911Z"></path><path data-name="Path 1467" d="M26.04 20.276v-9.949a1.253 1.253 0 0 0 0-1.886v-1.2a1.258 1.258 0 0 0-.856-1.19V5.013a1.256 1.256 0 1 0-.8 0v1.042a1.258 1.258 0 0 0-.856 1.19v1.2a1.253 1.253 0 0 0 0 1.886v9.949a2.115 2.115 0 0 0-1.283 1.942.4.4 0 0 0 .4.4h4.278a.4.4 0 0 0 .4-.4 2.114 2.114 0 0 0-1.283-1.946ZM23.905 9.383a.456.456 0 0 1 .455-.455h.856a.456.456 0 0 1 0 .911h-.856a.456.456 0 0 1-.455-.456Zm.883-6.017a.455.455 0 1 1-.455.455.456.456 0 0 1 .451-.453Zm-.455 3.878a.456.456 0 1 1 .911 0v.884h-.911Zm0 3.394h.911v9.468h-.911Zm-1.228 11.179a1.313 1.313 0 0 1 1.248-.911h.856a1.313 1.313 0 0 1 1.248.911Z"></path><path data-name="Path 1468" d="M18.757 11.006a.4.4 0 1 0-.78.18l2.454 10.632H6.892l2.454-10.632a.4.4 0 1 0-.78-.18L5.999 22.128a.4.4 0 0 0 .39.49h14.545a.4.4 0 0 0 .39-.49Z"></path><path data-name="Path 1469" d="m8.033 8.744 2.631 1.911-1 3.093a.891.891 0 0 0 1.372 1l2.631-1.912 2.631 1.912a.878.878 0 0 0 1.048 0 .878.878 0 0 0 .324-1l-1-3.093 2.631-1.912a.891.891 0 0 0-.524-1.613h-1.683a.4.4 0 0 0 0 .8h1.683a.091.091 0 0 1 .054.165l-2.866 2.082a.4.4 0 0 0-.145.448l1.095 3.369a.091.091 0 0 1-.14.1l-2.866-2.082a.4.4 0 0 0-.47 0l-2.866 2.082a.091.091 0 0 1-.14-.1l1.095-3.369a.4.4 0 0 0-.145-.448L8.517 8.095a.091.091 0 0 1 .053-.165h3.543a.4.4 0 0 0 .381-.277l1.095-3.369a.091.091 0 0 1 .173 0l1.095 3.369a.4.4 0 1 0 .761-.247l-1.095-3.369a.891.891 0 0 0-1.7 0l-1 3.093H8.559a.892.892 0 0 0-.524 1.613Z"></path><path data-name="Path 1470" d="M11.667 3.25a.4.4 0 1 0 .566-.566l-.856-.856a.4.4 0 0 0-.566.566Z"></path><path data-name="Path 1471" d="M15.372 3.367a.4.4 0 0 0 .283-.117l.856-.856a.4.4 0 1 0-.566-.566l-.856.856a.4.4 0 0 0 .283.683Z"></path><path data-name="Path 1472" d="M13.661 2.511a.4.4 0 0 0 .4-.4V.4a.4.4 0 1 0-.8 0v1.711a.4.4 0 0 0 .4.4Z"></path></g></svg>
            </div>
            <div className="mobilemenutextbox"><Text className="mobilemenutext">Warri Traditional Council</Text></div>
        </Link>
        <Link to="/Royalcourtnotices" className='mobilenavrow'>
            <div className="mobilemenuicon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4d1200"><g data-name="Group 11527" fill="#4d1200"><path data-name="Path 1466" d="M3.8 20.276v-8.325a.4.4 0 0 0-.8 0v8.156h-.916v-9.468h.883a1.255 1.255 0 0 0 .828-2.2v-1.2a1.258 1.258 0 0 0-.856-1.19V5.013a1.256 1.256 0 1 0-.8 0v1.042a1.258 1.258 0 0 0-.856 1.19v1.2a1.253 1.253 0 0 0 0 1.886v9.949A2.114 2.114 0 0 0 0 22.218a.4.4 0 0 0 .4.4h4.278a.4.4 0 0 0 .4-.4A2.114 2.114 0 0 0 3.8 20.276ZM2.967 9.839h-.856a.456.456 0 1 1 0-.911h.856a.456.456 0 0 1 0 .911Zm-.428-6.472a.455.455 0 1 1-.455.455.456.456 0 0 1 .455-.454Zm-.455 3.878a.456.456 0 0 1 .911 0v.884h-.911ZM.863 21.817a1.313 1.313 0 0 1 1.248-.911h.856a1.313 1.313 0 0 1 1.248.911Z"></path><path data-name="Path 1467" d="M26.04 20.276v-9.949a1.253 1.253 0 0 0 0-1.886v-1.2a1.258 1.258 0 0 0-.856-1.19V5.013a1.256 1.256 0 1 0-.8 0v1.042a1.258 1.258 0 0 0-.856 1.19v1.2a1.253 1.253 0 0 0 0 1.886v9.949a2.115 2.115 0 0 0-1.283 1.942.4.4 0 0 0 .4.4h4.278a.4.4 0 0 0 .4-.4 2.114 2.114 0 0 0-1.283-1.946ZM23.905 9.383a.456.456 0 0 1 .455-.455h.856a.456.456 0 0 1 0 .911h-.856a.456.456 0 0 1-.455-.456Zm.883-6.017a.455.455 0 1 1-.455.455.456.456 0 0 1 .451-.453Zm-.455 3.878a.456.456 0 1 1 .911 0v.884h-.911Zm0 3.394h.911v9.468h-.911Zm-1.228 11.179a1.313 1.313 0 0 1 1.248-.911h.856a1.313 1.313 0 0 1 1.248.911Z"></path><path data-name="Path 1468" d="M18.757 11.006a.4.4 0 1 0-.78.18l2.454 10.632H6.892l2.454-10.632a.4.4 0 1 0-.78-.18L5.999 22.128a.4.4 0 0 0 .39.49h14.545a.4.4 0 0 0 .39-.49Z"></path><path data-name="Path 1469" d="m8.033 8.744 2.631 1.911-1 3.093a.891.891 0 0 0 1.372 1l2.631-1.912 2.631 1.912a.878.878 0 0 0 1.048 0 .878.878 0 0 0 .324-1l-1-3.093 2.631-1.912a.891.891 0 0 0-.524-1.613h-1.683a.4.4 0 0 0 0 .8h1.683a.091.091 0 0 1 .054.165l-2.866 2.082a.4.4 0 0 0-.145.448l1.095 3.369a.091.091 0 0 1-.14.1l-2.866-2.082a.4.4 0 0 0-.47 0l-2.866 2.082a.091.091 0 0 1-.14-.1l1.095-3.369a.4.4 0 0 0-.145-.448L8.517 8.095a.091.091 0 0 1 .053-.165h3.543a.4.4 0 0 0 .381-.277l1.095-3.369a.091.091 0 0 1 .173 0l1.095 3.369a.4.4 0 1 0 .761-.247l-1.095-3.369a.891.891 0 0 0-1.7 0l-1 3.093H8.559a.892.892 0 0 0-.524 1.613Z"></path><path data-name="Path 1470" d="M11.667 3.25a.4.4 0 1 0 .566-.566l-.856-.856a.4.4 0 0 0-.566.566Z"></path><path data-name="Path 1471" d="M15.372 3.367a.4.4 0 0 0 .283-.117l.856-.856a.4.4 0 1 0-.566-.566l-.856.856a.4.4 0 0 0 .283.683Z"></path><path data-name="Path 1472" d="M13.661 2.511a.4.4 0 0 0 .4-.4V.4a.4.4 0 1 0-.8 0v1.711a.4.4 0 0 0 .4.4Z"></path></g></svg>
            </div>
            <div className="mobilemenutextbox"><Text className="mobilemenutext">Royal Court Notices</Text></div>
        </Link>

    </div>
  )
}