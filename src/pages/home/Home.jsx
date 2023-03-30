import React from 'react'
import "./Home.css"
import Navbar from '../../components/navbar/Navbar.jsx'
import Carrousel from '../../components/carrousel/Carrousel.jsx'
import ShoppingWindow from '../../components/shoppingwindow/Shoppingwindow.jsx'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Carrousel />
      <ShoppingWindow />
    </>
  )
}

export default Home
