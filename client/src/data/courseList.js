import React from "react";
import "./homepage.css"

export default function CourseList(props) {
    return (
        <div className="courseList">
            <div>
                <img className="courseImage" src={props.image} />
                <div className="courseName">
                    {props.text}
                </div>
            </div>

        </div>
    );
}
