import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div><Link to="/counter" className="nav-link">Counter</Link></div>

            <div><Link to="/todo" className="nav-link">Todo</Link></div>

            <div><Link to="/toggle-text" className="nav-link">Toggle Text</Link></div>

            <div><Link to="/textarea" className="nav-link">Textarea</Link></div>

            <div><Link to="/search" className="nav-link">Search</Link></div>

            <div><Link to="/users" className="nav-link">Users</Link></div>

            <div><Link to="/login" className="nav-link">Login</Link></div>

            <div><Link to="/accordion" className="nav-link">Accordion</Link></div>

            <div><Link to="/theme" className="nav-link">Theme</Link></div>

            <div><Link to="/timer" className="nav-link">Timer</Link></div>
        </div>
    )
}

export default Navbar