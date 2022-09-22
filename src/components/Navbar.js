import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import GioDev_Logo from '../assets/images/GioDev_Logo.png'

export default function Navbar(){

    const loc = useLocation();

    return(
        <div className="navbar">
            <img className="logo" src={GioDev_Logo} alt=""></img>
            <div className="nav">
                <Link 
                    to="/" 
                    className={"nav-item "+(loc.pathname == "/" ? "active" : "")}>
                    Home
                </Link>
                <Link 
                    to="/about-me" 
                    className={"nav-item "+(loc.pathname == "/about-me" ? "active" : "")}>
                    About
                </Link>
                <Link 
                    to="/projects" 
                    className={"nav-item "+(loc.pathname == "/projects" ? "active" : "")}>
                    Projects
                </Link>
                <Link 
                    to="/contact-me" 
                    className={"nav-item "+(loc.pathname == "/contact-me" ? "active" : "")}>
                    Contact
                </Link>
            </div>
            <code>This website is currently under development</code>
        </div>
    );
}