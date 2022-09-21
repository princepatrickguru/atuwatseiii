import React, {useState, useEffect} from 'react'
import './App.css';
import { LoaderScreen, MobileNav, FloatingMenu } from './components/molecules'
import { Login, Home, WarriTraditional, History, Theginuwa, Royalcourtnotices, Events, Speeches } from './components/pages'
import { Routes, Route } from 'react-router-dom'

function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isMobileMenu, setIsMobileMenu] = useState(false)
    
    const setMobileMenu = (newstate)=>{
        setIsMobileMenu(newstate)
    }

    const lunchLoaderScreen = ()=>{
        setTimeout(() => {
            setIsLoaded(true)
        }, 2000);
    }

    useEffect(()=>{
        lunchLoaderScreen()
    },[])

  return (
    <div className="app">
        { !isLoaded && <LoaderScreen /> }
        <Routes>
        
            <Route path='/' element={ <Home setMobileMenu={setMobileMenu} /> } />
            <Route path='/warritraditional' element={ <WarriTraditional setMobileMenu={setMobileMenu} /> } />
            <Route path='/History' element={ <History setMobileMenu={setMobileMenu} /> } />
            <Route path='/Theginuwa' element={ <Theginuwa setMobileMenu={setMobileMenu} /> } />
            <Route path='/Royalcourtnotices' element={ <Royalcourtnotices setMobileMenu={setMobileMenu} /> } />
            <Route path='/Events' element={ <Events setMobileMenu={setMobileMenu} /> } />
            <Route path='/Speeches' element={ <Speeches setMobileMenu={setMobileMenu} /> } />
            <Route path='/Login' element={ <Login setMobileMenu={setMobileMenu} /> } />

        </Routes>
        { !isMobileMenu || <MobileNav setMobileMenu={setMobileMenu} /> }
        { isMobileMenu && <MobileNav setMobileMenu={setMobileMenu} /> }
        <FloatingMenu />
    </div>
  );
}

export default App;
