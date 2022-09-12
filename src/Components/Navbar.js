import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav class='navbar navbar-expand-lg navbar-dark'>
        <div class='container-fluid'>
          <Link class='navbar-brand' to='/'>
            BlockCoin
          </Link>

          <ul class='navbar-nav ms-auto'>
            <li class='nav-item'>
              <Link class='nav-link active' aria-current='page' to='/'>
                Home
              </Link>
            </li>
            <li class='nav-item'>
              <Link class='nav-link active ' to='/news'>
                News
              </Link>
            </li>
            <li class='nav-item'>
              <Link class='nav-link active' to='/about'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
