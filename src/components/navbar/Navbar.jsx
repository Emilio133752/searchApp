import React from 'react'
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'

import "./Navbar.css"

export const Navbar = () => {
  return (
      <div className='nvb-Container'>
        <div className='nvb-content'>
          <h1>SearchCar</h1>
          <ul>
            <li>Home</li>
            <li>Estoque</li>
            <li>Venda</li>
            <li>Compra</li>
            <li>Contato</li>
          </ul>

          <div className='nvb-contato'>
            <FaWhatsapp />
            <span>11 96969-6969</span>
          </div>
          <div className='nvb-socialMedia'>
            <FaInstagram />
            <FaYoutube />
            <FaFacebook />
          </div>
        </div>
      </div>
    )
}

export default Navbar
