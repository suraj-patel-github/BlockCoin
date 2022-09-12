import React from 'react'
import { Link } from 'react-router-dom'
const SingleNews = ({ image, title, description, content, time, mainlink }) => {
  const formattedTime = new Date(time).toDateString()
  return (
    <div class='col'>
      <div class='card'>
        <img src={image} class='card-img-top' alt='' />
        <div class='card-body'>
          <h5 class='card-title'>{title}</h5>
          {
            description != null && description.length<100 ? <p class='card-text'>{description}</p> : <p class='card-text'>{description}.substring(0, 100)...</p>
          }
          <p class='card-text'>
            <small class='text-muted'>Published at: {formattedTime}</small>
          </p>
          <button type='button' class='btn btn-outline-info'>
            <a href={mainlink} target='_blank'>
              More info...
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleNews
