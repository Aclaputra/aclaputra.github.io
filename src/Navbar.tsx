import React from 'react'
import './styles/Navbar.css'
import './styles/responsive.css'
import About from './routes/About'
import {BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Footer from './Footer'
import ProjectApp from './routes/ProjectApp'
import Blog from './routes/Blog'

function Navbar() {
    return (
        <Router>
            <div className="Navbar">
                <div className="navbar__content">
                    <div className="left__content">
                        <Link to="/" className="logo no-deco">ACLAPUTRA</Link>
                    </div>
                    <div className="right__content">
                        <Link to="/" className="about no-deco link_right_content">ABOUT</Link>
                        <Link to="/projects" className="no-deco link_right_content">PROJECTS</Link>
                        <Link to="/blog" className="no-deco link_right_content">BLOG</Link>                                         
                    </div>
                </div>
                
            </div>
            <Switch>
                <Route path="/" exact component={About}></Route>
                <Route path="/projects" exact component={ProjectApp}></Route>
                <Route path="/blog" exact component={Blog}></Route>
            </Switch>

            <Footer />
        </Router>
    )
}

export default Navbar
