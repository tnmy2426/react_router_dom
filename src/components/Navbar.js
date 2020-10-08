import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav">
            <div>
                Logo
            </div>
            <div>
                <Link to="/" href="#">Home</Link>
                <Link to="/posts" href="#">Post</Link>
                <Link to="about" href="#">About</Link>
            </div>
        </div>
    )
}

export default Navbar
