import React, { useState } from 'react'
import "./Carrousel.css"
import { BsCircleFill, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"

export const Carrousel = () => {

  const data = [
    {id: 1, url: "http://localhost:3000/assets/images/carro1.jpg"},
    {id: 2, url: "http://localhost:3000/assets/images/carro2.jpg"},
    {id: 3, url: "http://localhost:3000/assets/images/carro3.jpg"}
  ]

  const [slide, setSlide ] = useState(0);

  const navPrev = () => {
    const isFist = slide === 0;
    const prevSlide = isFist ? data.length - 1 : slide - 1
    setSlide(prevSlide)
  } 

  const navNext = () => {
    const isLast = slide === data.length - 1;
    const nextSlide = isLast ? 0 : slide + 1;
    setSlide(nextSlide)
  } 

  const navDots = (index) =>{ 
    setSlide(index)
  }

  return (
    <div className='crs-container'>
      <div className='crs-arrows'>
        <BsFillArrowLeftCircleFill onClick={ () => navPrev() } />
        <BsFillArrowRightCircleFill onClick={ () => navNext() }/>
      </div> 
      <div className='crs-item' style={{ 
        background: `url(${data[slide].url})` }}>
      </div>
      <div className='crs-dots'>
        <BsCircleFill onClick={() => navDots(0)} />
        <BsCircleFill onClick={() => navDots(1)} />
        <BsCircleFill onClick={() => navDots(2)}/>
      </div>
    </div>
  )
}

export default Carrousel
