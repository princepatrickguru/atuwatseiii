import React, {useState, useEffect} from 'react'
import './luncher.css'

export const Luncher = () => {
    const [isLunched, setIsLunched] = useState(false)
    const [islunchComplete, setIslunchComplete] = useState(false)
    
    const lunchScreen = ()=>{
        setTimeout(() => {
            setIsLunched(true)
        }, 2000);
    }
    const closeluncher = ()=>{
        setTimeout(() => {
            setIslunchComplete(true)
        }, 3000);
    }

    useEffect(()=>{
       lunchScreen()
    },[])

    let topluncher = ''
    let bottomluncher = ''
    let luncher = ''
    if(isLunched){
        topluncher = 'top-luncher top-luncher-run'
        bottomluncher = 'bottom-luncher bottom-luncher-run'
        closeluncher()
    }else{
        topluncher = 'top-luncher top-luncher-pre'
        bottomluncher = 'bottom-luncher bottom-luncher-pre'
      }
      
    if(islunchComplete){
        luncher = 'luncher luncherclose'
    }else{
        luncher = 'luncher'
    }
    
  return (
    <div className={luncher}>
      <div className={topluncher}></div>
      <div className={bottomluncher}></div>
    </div>
  )
}