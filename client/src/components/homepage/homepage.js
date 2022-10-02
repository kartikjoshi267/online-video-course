import React from "react"
import "./homepage.css"
import Navbar from "../navbar/navbar"

//const Homepage = ({ setLoginUser }) => {
const Homepage = () => {
    return (
        <div>
            <Navbar />
            {/* <div className="homepage">

                <h1>Hello Homepage</h1>
                <div className="button" onClick={() => setLoginUser({})} >Logout</div>
            </div> */}
        </div>
    )
}

export default Homepage