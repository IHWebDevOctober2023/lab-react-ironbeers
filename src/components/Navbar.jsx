import { Link } from "react-router-dom";
import homeImage from "../assets/home-icon.png";
import "./navbar.css";

function Navbar() {
    return (

        <nav className="navBar">
            <Link to="/" >
                <img src={homeImage} alt="" />
            </Link>
        </nav>

    )
}

export default Navbar;
