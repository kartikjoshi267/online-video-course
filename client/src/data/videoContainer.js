import React from "react";
import "./homepage.css";

export default function VideoContainer(props) {
    return (
        <div className="videoContainer">
            <img className="image" src={props.image} />
            <div className="subject">
                {props.subject}
            </div>
            <div className="topic">
                {props.topic}
            </div>
            <div className="author">
                By {props.author}
            </div>
            <div className="button">
                Enroll Now
            </div>
        </div>
    );
}