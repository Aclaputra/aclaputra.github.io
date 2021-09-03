import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'

function Navbar() {
    return (
        <div className="Navbar">
            <div className="navbar__content">
                <div className="left__content">
                    <Link to="/" className="logo no-deco">ACLAPUTRA</Link>
                </div>
                <div className="right__content">
                    <Link to="/about" className="about no-deco">ABOUT</Link>
                    <Link to="/projects" className="no-deco">PROJECTS</Link>
                    <Link to="/blog" className="no-deco">BLOG</Link>                                         
                </div>
            </div>
        </div>
    )
}

export default Navbar
