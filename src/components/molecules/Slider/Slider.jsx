import React, {useState, useEffect} from 'react'
import './slider.css'
import historyimg from '../../images/history.js'

export const Slider = () => {
    const [activeRuller, setActiveRuller] = useState(0);
    

    const setRuller = (direction)=>{
        if(direction === "right"){
            if(activeRuller === historyimg.length-1){
                setActiveRuller(0)
            }else{
                setActiveRuller(activeRuller + 1)
            }
        }
        if(direction === "left"){
            if(activeRuller === 0){
                setActiveRuller(historyimg.length-1)
            }else{
                setActiveRuller(activeRuller - 1)
            }
        }
    }

    useEffect(()=>{
          const interval = setInterval(()=>{
            const count = historyimg.length;

            if(activeRuller < count){
                if(activeRuller === count-1){
                    setActiveRuller(0);
                }else{
                    setActiveRuller(activeRuller + 1);
                }
            }else{
                setActiveRuller(0);
            }
        }, 3000);

        return () => clearInterval(interval);
    },[activeRuller])

  return (
    <div className='slider'>
        <button className='btn-style' onClick={()=>{setRuller('left')}}>🢐</button>
      <div className="slider-img">
        {
            historyimg.map((ruller, index)=>{
                let sliderimg
                if(index === activeRuller){
                    sliderimg='sliderimg active'
                }else{
                    sliderimg='sliderimg inactive'
                }

                return(
                    <img className={sliderimg} key={ruller.img} src={ruller.img} alt={ruller.img}  />
                )
            })
        }
      </div>
        <button className='btn-style' onClick={()=>{setRuller('right')}}>🢒</button>
    </div>
  )
}
