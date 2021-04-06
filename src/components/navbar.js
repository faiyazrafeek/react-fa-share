import React from 'react'
import { Share2 } from 'react-feather';
import './navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#!">
                    <Share2 size={30} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#!">Share Text</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">About</a>
                        </li>                     
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
