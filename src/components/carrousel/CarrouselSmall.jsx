import React, { useState } from 'react'
import "./CarrouselSmall.css"
import { BsCircleFill, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"

export const CarrouselSmall = () => {

  const [slide, setSlide] = useState(0)

  const vitrine = [
    {id: 1, url: "http://localhost:3000/assets/images/carro1.jpg"},
    {id: 2, url: "http://localhost:3000/assets/images/carro2.jpg"},
    {id: 3, url: "http://localhost:3000/assets/images/carro3.jpg"},
    {id: 4, url: "http://localhost:3000/assets/images/carro2.jpg"},
    {id: 5, url: "http://localhost:3000/assets/images/carro1.jpg"},
    {id: 6, url: "http://localhost:3000/assets/images/carro3.jpg"},
    {id: 7, url: "http://localhost:3000/assets/images/carro2.jpg"},
    {id: 8, url: "http://localhost:3000/assets/images/carro1.jpg"},
  ]

  const navPrev = () => {
    const isFist = slide === 0;
    const prevSlide = isFist ? vitrine.length - 1 : slide - 1
    setSlide(prevSlide)
  } 

  const navNext = () => {
    const isLast = slide === vitrine.length - 1;
    const nextSlide = isLast ? 0 : slide + 1;
    setSlide(nextSlide)
  } 

  const navDot = (index) =>{
    setSlide(index)
  }
  
  return (
    <div className='crsm-container'>
      <div className='crsm-arrows'>
        <BsFillArrowLeftCircleFill onClick={() => navPrev()}  />
        <BsFillArrowRightCircleFill onClick={() => navNext()} />
      </div> 
      <div className='crsm-item' style={{ 
        background: `url(${vitrine[slide].url})` }}>
      </div>
      <div className='crsm-dots'>
        {vitrine.map((item, index) =>(
          <BsCircleFill key={index} onClick={ () => navDot(index) } />
        ))}
      </div>
    </div>
  )
}
export default CarrouselSmall