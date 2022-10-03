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

// const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");
// const sign_in_btn2 = document.querySelector("#sign-in-btn2");
// const sign_up_btn2 = document.querySelector("#sign-up-btn2");

// sign_up_btn.addEventListener("click", () => {
//     container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//     container.classList.remove("sign-up-mode");
// });

// sign_up_btn2.addEventListener("click", () => {
//     container.classList.add("sign-up-mode2");
// });
// sign_in_btn2.addEventListener("click", () => {
//     container.classList.remove("sign-up-mode2");
// });

// // animation

// document.querySelectorAll(".text-input").forEach((element) => {
//     element.addEventListener("blur", (event) => {
//         if (event.target.value != "") {
//             event.target.nextElementSibling.classList.add("filled");
//         } else {
//             event.target.nextElementSibling.classList.remove("filled");
//         }
//     });
// });