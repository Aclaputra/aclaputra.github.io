import React from 'react'
import { Linkedin, Github, Twitter } from 'react-bootstrap-icons'
import './styles/Footer.css'

function Footer() {
    return (
        <div>
            <div className="third__container">
                <div className="third__left">
                    <div>Subscribe</div>
                    <div>Feedback</div>
                    <div>RSS</div>
                </div>
                <div className="third__right">
                    <div><Linkedin size={18}/></div>
                    <div><Github size={18}/></div>
                    <div><Twitter size={18}/></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
