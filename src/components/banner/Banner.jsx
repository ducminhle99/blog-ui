import React from 'react'
import "./banner.css";

export default function Banner() {
    return (
        <div className="banner">
            <div className="bannerTitles">
                <span className="bannerTitleSm">React & Node</span>
                <span className="bannerTitleLg">BLOG</span>
            </div>
            <img
                className="bannerImg"
                src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
            />
        </div>
    );
}
