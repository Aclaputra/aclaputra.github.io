import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'
import './styles/responsive.css'

function Navbar() {
    return (
        <div className="Navbar">
            <div className="navbar__content">
                <div className="left__content">
                    <Link to="/" className="logo no-deco">ACLAPUTRA</Link>
                </div>
                <div className="right__content">
                    <Link to="/about" className="about no-deco link_right_content">ABOUT</Link>
                    <Link to="/projects" className="no-deco link_right_content">PROJECTS</Link>
                    <Link to="/blog" className="no-deco link_right_content">BLOG</Link>                                         
                </div>
            </div>
        </div>
    )
}

export default Navbar
