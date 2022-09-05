import React from 'react'


export default function NavBar({ title, handlelogout }) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           


          </ul>
          <div className="form-check form-switch">
          <button type="button" onClick={handlelogout} className="btn btn-danger btn-sm">Logout</button>
          </div>
        </div>
      </div>

    </nav>

  )
}

