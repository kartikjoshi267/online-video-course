import React from "react";
import "./homepage/homepage.css"
import { useHistory } from "react-router-dom";

export default function CourseList(props) {
    const history = useHistory();

    const handleClick = () => {

        history.push("/course")

    };
    return (
        <div className="courseList">
            <div>
                <img className="courseImage" src={props.image} onClick={handleClick} />
                <div className="courseName">
                    {props.text}
                </div>
            </div>

        </div>
    );
}
