import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
        <p>Powered by</p>
        <img src={require('../images/DH.png')} alt='DH-logo'/>
    </footer>
  )
}

export default Footer
