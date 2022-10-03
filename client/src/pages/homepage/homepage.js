import React from "react"
import "./homepage.css"
import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import VideoSession from "../../components/VideoSession/VideoSession"
import CourseList from "../../components/courseList"
import { useHistory } from "react-router-dom"
import ImageSlider from "../../components/ImageSlider/ImageSlider"
import LatestCourse from "../../components/LatestCourse/LatestCourse"

//const Homepage = ({ setLoginUser }) => {
const Homepage = () => {

    return (
        <div>
            <Navbar />
            <ImageSlider />

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
                    <LatestCourse />
                </div>
                <div className="free">
                    Free Video Session
                    <div className="videoList">
                        <VideoSession />
                    </div>
                </div>
            </div>

            <Footer />

        </div>

    )
}

export default Homepage