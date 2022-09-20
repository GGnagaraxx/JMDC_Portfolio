import { Link } from "react-router-dom"
import sample_logo from '../assets/images/sample_logo.png'

export default function Navbar(){
    return(
        <div className="navbar">
            <img className="logo" src={sample_logo} alt=""></img>
            <div className="nav">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about-me" className="nav-item">About</Link>
                <Link to="/projects" className="nav-item">Projects</Link>
                <Link to="/contact-me" className="nav-item">Contact</Link>
            </div>
        </div>
    );
}