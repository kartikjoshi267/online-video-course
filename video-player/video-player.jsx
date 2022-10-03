import React from "react";
import './video-player.css'

export default function VideoContainer(props) {
    return (
        <div>
            <a href="#" class="article swiper-slide">

                <img src={props.image} alt="" class="article-image" />

                <div class="article-data-container">
                    <div class="article-data">
                        <span>{props.subject}</span>
                        <span class="article-data-spacer"></span>
                        <span>{props.topic}</span>
                        <span>{props.author}</span>
                    </div>
                    <h3 class="title article-title">Sample article title</h3>
                </div>
            </a>
        </div>
    );
}