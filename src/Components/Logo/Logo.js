import React from 'react'
import './Logo.css'
const Logo = ({ownerName}) => {
  return (
    <div className='_logo'>
    <p className='owner-name'>{ownerName}</p>
    <p className='site-type'>Portfolio</p>
    </div>
  )
}

export default Logo