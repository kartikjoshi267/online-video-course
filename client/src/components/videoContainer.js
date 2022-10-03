import React from "react";
import "../pages/homepage/homepage";
import "../pages/homepage/homepage.css";

export default function VideoContainer(props) {
    return (
        <div className="videoContainer" style={{ margin: "10px" }}>
            <img className="image" style={{ height: "100%" }} src={props.image} />
            <div className="info" >
                <div className="subject">
                    {props.subject}
                </div>
                <div className="topic">
                    {props.topic}
                </div>
                <span className="instructor"> By {props.author}</span>


                <div className="button" >

                    Enroll Now
                </div>
            </div>
        </div>
    );
}