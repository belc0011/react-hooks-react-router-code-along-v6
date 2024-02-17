import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav>
            <NavLink
            to="/"
            className="NavLink"
            >
                 Home 
            </NavLink>
            <NavLink
            to="/about"
            className="NavLink"
            >
                 About 
            </NavLink>
            <NavLink
            to="/Login"
            className="NavLink"
            >
                 Login 
            </NavLink>
        </nav>
    )
}

export default NavBar;