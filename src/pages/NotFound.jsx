import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/image.png'

const NotFound = () => {
  return (
    <div className='pageNotFound'>
      <h1>Page is not found</h1>
      <Link to={'/'}>Go back</Link>
      <img src={image} alt="Page is not found" />
    </div>
  )
}

export default NotFound