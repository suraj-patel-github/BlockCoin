import React from 'react'
import { Link } from 'react-router-dom'
const SingleNews = ({ image, title, description, content, time, mainlink }) => {
  return (
    <div class='col'>
      <div class='card'>
        <img src={image} class='card-img-top' alt='' />
        <div class='card-body'>
          <h5 class='card-title'>{title}</h5>
          <p class='card-text'>{description}</p>
          <p class='card-text'>
            <small class='text-muted'>Published at: {time}</small>
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
