import React, { useState, useEffect } from 'react'
import "./Slider.css"
// import {AiOutLineArrowLeft,AiOutLineArrowRight} from "react-icons/ai"
import{SliderData} from './SliderData'
const Slider = () => {
    const [currentSlide, setcurrentSlide] = useState(0)
    const slideLength = SliderData.length;

    const autoScroll = true
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide =()=>{
        setcurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };

    function auto(){
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(()=>{
        setcurrentSlide(0)
    },[])
    useEffect(()=>{
       if(autoScroll){
        auto();
       }
       return()=> clearInterval(slideInterval)
    },[currentSlide])
  return (
    <div className='slider'>
        {SliderData.map((slide, index)=>{
            return(
                <div className={index === currentSlide ? "slide current" : "slide" } key={index} >
                    {index === currentSlide && (
                        <div className="slide-box">
                            <img src={slide.image} alt="slide" />
                            <div className="content">
                                <h2>{slide.heading}</h2>
                                <p>{slide.desc}</p>
                                <button className="btn">
                                    get started
                                </button>
                            </div>
                            <div className={`bg ${slide.bg}`}></div>
                        </div>
                    )}
                </div>
            )
        })}
    </div>
  )
}

export default Slider