import { Link } from 'react-router-dom'
import '../styles/responsive.css'

function Blog() {
    return (
        <div className="blog">
            <div className="header">
                <h1>Blog</h1>
                <p>This is a blog</p>
            </div>
            <div className="header">
                <div className="header">
                    <h2>1. How algorithms works ?</h2>
                    <p>Description of how algorithms works</p>
                </div>
                <div className="header">
                    <h2>2. Deep dive into Brute Force algorithms</h2>
                    <p>Description of deep dive into brute force algorithms</p>
                </div>
            </div>
        </div>
    )
}

export default Blog
