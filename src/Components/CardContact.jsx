import React from 'react'
import '../styles/Card.css'

const CardContact = ({fullname, email}) => {
  return (
    <div className='card-contact-container'>
      <h3>{fullname}</h3>
      <h4>{email}</h4>
    </div>
  )
}

export default CardContact
