import React from 'react'
import "./post.css";

export default function Post(props) {
    const { img } = props;
    return (
        <div className="post">
            <img
                src={img}
                alt=""
                className="postImg"
            />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        <a className="link"> Music</a>
                    </span>
                    <span className="postCat">
                        <a className="link"> Life</a>
                    </span>
                    <span className="postCat">
                        <a className="link"> Music</a>
                    </span>
                    <span className="postCat">
                        <a className="link"> Music</a>
                    </span>
                </div>
                <div className="postTitle">
                    <a className="link">Lorem ipsum dolor sit </a>
                </div>
                <p className="postDec">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore natus repudiandae ut iusto,
                    atque eos eligendi culpa perspiciatis, tempora nam nostrum magnam ex ullam corporis ipsum,
                    quia non at quo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse reprehenderit architecto,
                    sapiente adipisci numquam quam consectetur a magnam ullam? Ullam nam illum ipsam, ipsa quam id possimus rem doloremque eius.
                </p>
            </div>
        </div>
    )
}
