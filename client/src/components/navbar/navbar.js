import "./navbar.css"
import { Link, useHistory } from "react-router-dom"

const logo1 = process.env.PUBLIC_URL + "/vecteezy_simple-education-logo-design-template-book-icon-emblem-for_.jpg"
const Navbar = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/login")
    };

    return (
        <div className="navbar">
            <div className="navContainer">
                <img className="image-logo" src= {logo1}/>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <span className="logo">Coursify</span>
                </Link>
                <ul class="nested-dropdowns">
                    <li>
                        <div class="nested-dropdowns__item">
                            <span className="logo-name"> Catogeries</span>
                        </div>
                        <ul>
                            <li>Study</li>
                            <li>Study</li>
                            <li>
                                <div class="nested-dropdowns__item">
                                Study
                                    <div class="nested-dropdowns__arrow">▶</div>
                                </div>
                                {/* <div> */}
                                <ul>
                                    <li>Study</li>
                                    <li>Study</li>
                                    <li>Study</li>
                                    <li>Study</li>
                                    <li>Study</li>
                                </ul>
                                {/* </div> */}
                            </li>
                            <li>Study</li>
                            <li>Study</li>
                        </ul>
                    </li>
                </ul>
                <input className="search" type= 'text'  placeholder= 'Search....'/>
                <div className="study">Study Materials</div>
                <div className="study">Study Materials</div>
                <div className="navItems">
                    <button className="navButton" onClick={handleClick}>Login or Register</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar