import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"



const Login = ({ setLoginUser }) => {



    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("/authUser/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                history.push("/")
            })

    }
    const logo1 = process.env.PUBLIC_URL + "/vecteezy_simple-education-logo-design-template-book-icon-emblem-for_.jpg"

    return (

        <div className="main-login">
            <img className="imageLogin" src="login 1.png" />
            <div className="login">
                <img className="logo" src={logo1} />

                <h2>Welcome to Coursify</h2><br></br>
                <div style={{ textAlign: "left", marginLeft: "2", fontSize: "18px" }}>Welcome back Please Login <br></br>
                    to your Account.</div>

                <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>

                <div className="button" onClick={login}>Login</div>
                <div><h3>Or</h3></div><br></br>
                <span >Don't have an Account?</span><br></br><br></br>
                <span style={{ color: "blue", fontSize: "20px", cursor: "pointer" }} onClick={() => history.push("/register")}>Register</span>

            </div>
        </div >
    )
}

export default Login