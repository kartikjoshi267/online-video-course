import React from "react"
import "./homepage.css"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import VideoContainer from "../videoContainer"
import CourseList from "../courseList"
import { useHistory } from "react-router-dom"

//const Homepage = ({ setLoginUser }) => {
const Homepage = () => {

    return (
        <div>
            <Navbar />

            <img className="header" src="https://growth-cdn.vedantu.com/vmkt/PROD/webp/1ffb5bfb-ce9c-4aed-9c17-b49e8e4857f1-1663833464546-4102418410874681.webp" />
            <div className="course">
                Courses Offered

                <div className="courseList">
                    <CourseList image="https://yt3.ggpht.com/a/AGF-l7_DudcXuxN_j4G-4vEX6jOtOB_WOnX5wUt9cQ=s900-c-k-c0xffffffff-no-rj-mo" text="TEXT" />
                    <CourseList image="https://yt3.ggpht.com/a/AGF-l7_DudcXuxN_j4G-4vEX6jOtOB_WOnX5wUt9cQ=s900-c-k-c0xffffffff-no-rj-mo" text="TEXT" />
                    <CourseList image="https://yt3.ggpht.com/a/AGF-l7_DudcXuxN_j4G-4vEX6jOtOB_WOnX5wUt9cQ=s900-c-k-c0xffffffff-no-rj-mo" text="TEXT" />
                    <CourseList image="https://yt3.ggpht.com/a/AGF-l7_DudcXuxN_j4G-4vEX6jOtOB_WOnX5wUt9cQ=s900-c-k-c0xffffffff-no-rj-mo" text="TEXT" />
                    <CourseList image="https://yt3.ggpht.com/a/AGF-l7_DudcXuxN_j4G-4vEX6jOtOB_WOnX5wUt9cQ=s900-c-k-c0xffffffff-no-rj-mo" text="TEXT" />
                    <CourseList image="https://yt3.ggpht.com/a/AGF-l7_DudcXuxN_j4G-4vEX6jOtOB_WOnX5wUt9cQ=s900-c-k-c0xffffffff-no-rj-mo" text="TEXT" />


                </div>
                Latest Courses
                <div className="latest">
                    <img className="latestimage" src="https://growth-cdn.vedantu.com/vmkt/PROD/webp/1ffb5bfb-ce9c-4aed-9c17-b49e8e4857f1-1663833464546-4102418410874681.webp" />
                    <img className="latestimage" src="https://growth-cdn.vedantu.com/vmkt/PROD/webp/1ffb5bfb-ce9c-4aed-9c17-b49e8e4857f1-1663833464546-4102418410874681.webp" />
                    <img className="latestimage" src="https://growth-cdn.vedantu.com/vmkt/PROD/webp/1ffb5bfb-ce9c-4aed-9c17-b49e8e4857f1-1663833464546-4102418410874681.webp" />
                </div>
                <div className="free">
                    Free Video Session
                    <div className="videoList">

                        <VideoContainer image="https://growth-cdn.vedantu.com/vmkt/PROD/webp/1ffb5bfb-ce9c-4aed-9c17-b49e8e4857f1-1663833464546-4102418410874681.webp" subject="maths" topic="trignometry" author="Divya Kapadia" />
                        <VideoContainer image="https://growth-cdn.vedantu.com/vmkt/PROD/webp/1ffb5bfb-ce9c-4aed-9c17-b49e8e4857f1-1663833464546-4102418410874681.webp" subject="maths" topic="trignometry" author="Divya Kapadia" />
                        <VideoContainer image="https://growth-cdn.vedantu.com/vmkt/PROD/webp/1ffb5bfb-ce9c-4aed-9c17-b49e8e4857f1-1663833464546-4102418410874681.webp" subject="maths" topic="trignometry" author="Divya Kapadia" />
                    </div>
                </div>


            </div>
            <Footer />



        </div>

    )
}

export default Homepage