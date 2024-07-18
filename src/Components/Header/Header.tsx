import React from 'react'
import logo from '../../assets/Logo.svg'

function Header() {
  return (
    <>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src= {logo} alt="" height={50} width={100} />
          </a>
        </div>
      </nav>
    </>
  )
}

export default Header