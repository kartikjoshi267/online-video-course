import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("/authUser/register", user)
                .then(res => {
                    alert(res.data.message)
                    history.push("/login")
                })
        } else {
            alert("invalid input")
        }

    }
    const logo1 = process.env.PUBLIC_URL + "/vecteezy_simple-education-logo-design-template-book-icon-emblem-for_.jpg"

    return (
        <div className="main-login">
            <img className="imageLogin" src="login 1.png" />
            <div className="register">
                {console.log("User", user)}
                <img className="logo" src={logo1} />
                <h3>Let's Learn Together !!</h3><br></br>
                <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
                <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
                <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
                <div className="button" onClick={register} >Register</div>
                <div><h3>or</h3></div><br></br>
                <span>Already have an Account?</span><br></br><br></br>
                <span style={{ color: "blue", fontSize: "20px", cursor: "pointer" }} onClick={() => history.push("/login")}>Login</span>
            </div>
        </div>
    )
}

export default Register