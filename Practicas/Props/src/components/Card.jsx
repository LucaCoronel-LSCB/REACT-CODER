import React from 'react'
import "./Card.css"
const Card = ({h1,desc}) => {
  return (
    <div className='BoxElements'>
      <h1>{h1}</h1>
      <p>{desc}</p>
      <p>{desc}</p>
    </div>
  )
}

export default Card




