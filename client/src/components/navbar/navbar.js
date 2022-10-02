import "./navbar.css"
import { Link, useHistory } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const history = useHistory();

    const handleClick = () => {

        history.push("/login")

    };
    return (
        <div className="navbar">

            <div className="navContainer">
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <span className="logo">Coursefy</span>
                </Link>
                <div >Study Materials</div>
                <div>Study Materials</div>
                <div>Study Materials</div>
                <div>Study Materials</div>
                <div className="navItems">

                    {/* <button className="navButton" onClick={handleClick} >Register</button> */}
                    <button className="navButton" onClick={handleClick}>Login or Register</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar