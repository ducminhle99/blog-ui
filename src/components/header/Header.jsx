import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <div className="top">
            <div className="topLeft">
                <i class="topIcon fas fa-blog"></i>
                <h2>Blog app</h2>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topMenu">HOME</li>
                    <li className="topMenu">ABOUT</li>
                    <li className="topMenu">CONTACT</li>
                    <li className="topMenu">WRITE</li>
                </ul>
            </div>
            <div className="topRight">
                <ul className="topList">
                    <li className="topMenu">
                        login
                    </li>
                    <li className="topMenu">
                        register
                    </li>
                </ul>

                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
